import numpy as np
from scipy import integrate
from scipy.integrate import solve_ivp
from model.helperFunctions import returnK


def fun(x, y, g, m, d, rho, mu=0.0000157):
    k = returnK(v=y[1], rho=rho, d=d, mu=mu)
    # Vrnjen vektor
    return np.array([y[1], g-k/m*y[1]**2])


def solveODE(m, rho_air_value, y_points, diam, height, g0):
    # Pogoj kdaj se izračun diferencialne enačbe konča
    def tla(x, y): return height-y[0]
    tla.terminal = True
    tla.direction = -1

    # Numerični izračun rešitve
    res = solve_ivp(lambda t, y: fun(t, y, m=m, d=diam, rho=float(rho_air_value), g=g0), [
                    y_points[0], y_points[-1]], y0=np.array([0, 0]), t_eval=y_points, events=tla)
    y, v = res.y

    # Izračun pospeška
    a = fun(y_points, res.y, m=m, d=diam, rho=float(rho_air_value), g=g0)[1]

    return a, v, y, res.t


def initCalculation(**d):
    print('Starting ODE calculation')
    return solveODE(**d)
