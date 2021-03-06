from aiohttp import web
import aiohttp_cors
from model.enviromentLibrary import EnviromentLibrary
import socketio

# Init server
sio = socketio.AsyncServer()
app = web.Application()
sio.attach(app)

# List of connected clients
clients = {}


async def index(request):
    """Serve the client-side application."""
    with open('client/build/index.html') as f:
        return web.Response(text=f.read(), content_type='text/html')


@sio.on('connect')
def connect(sid, environ):
    print("Connected ", sid)
    clients[sid] = EnviromentLibrary(sid)


@sio.on('settings')
async def settings(sid, message):
    # Message packet contains object with ID and Settings
    clients[sid].updateEnviroment(message['id'], message['data'])


@sio.on('createEnviroment')
async def createEnviroment(sid, message):
    print("Creating enviroment: ", message['id'])
    clients[sid].createEnviroment(message['id'])


@sio.on('startCalculation')
async def startCalculation(sid, message):
    a, v, y, t = clients[sid].startCalculation(message['id'])
    await sio.emit('calculationResponse', {'id': message['id'], 'data': {'a': a.tolist(),
                                                                         'v': v.tolist(),
                                                                         'y': y.tolist(),
                                                                         't': t.tolist()}})


@sio.on('disconnect')
def disconnect(sid):
    print('disconnect ', sid)


app.router.add_static('/static', 'client/build/static')
app.router.add_get('/', index)


def startServer():
    web.run_app(app)


# `aiohttp_cors.setup` returns `aiohttp_cors.CorsConfig` instance.
# The `cors` instance will store CORS configuration for the
# application.
cors = aiohttp_cors.setup(app)

# To enable CORS processing for specific route you need to add
# that route to the CORS configuration object and specify its
# CORS options.
resource = cors.add(app.router.add_resource("/hello"))
route = cors.add(
    resource.add_route("GET", index), {
        "*": aiohttp_cors.ResourceOptions(
            allow_credentials=True,
            expose_headers=("X-Custom-Server-Header",),
            allow_headers=("X-Requested-With", "Content-Type"),
            max_age=3600,
        )
    })
