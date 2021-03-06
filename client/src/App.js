import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Enviroment from "./components/Enviroment";
import openSocket from "socket.io-client";
import EnviromentMenu from './components/EnviromentMenu'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enviromentNumber: 1,
      socket: null
    };

    this.socketConnect = this.socketConnect.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.addEnviroment = this.addEnviroment.bind(this);
    this.removeEnviroment = this.removeEnviroment.bind(this);
  }

  socketConnect() {
    let socket = openSocket("http://localhost:8080");

    socket.on("connect", function() {
      console.log("connected");
    });
    this.setState({ socket: socket });
  }

  componentDidMount() {
    this.socketConnect();
  }

  addEnviroment(){
    this.setState({enviromentNumber: this.state.enviromentNumber+1})
  }
  removeEnviroment(){
    this.setState({enviromentNumber: this.state.enviromentNumber-1})
  }

  render() {
    const enviroments = generateEnviroments(
      this.state.enviromentNumber,
      this.state.socket
    );
    return (
      <div className="App">
        
        <header className="App-header">
        <EnviromentMenu addEnviroment={this.addEnviroment} removeEnviroment={this.removeEnviroment}/>
          {this.state.socket === null ? "Connecting" : enviroments }
        </header>
      </div>
    );
  }
}

const generateEnviroments = (num, socket) => {
  let envs = [];
  for (let i = 0; i < num; i++)
    envs.push(<Enviroment key={i} id={i} socket={socket} />);
  return envs;
};

export default App;
