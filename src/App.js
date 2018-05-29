import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class HelloUser extends Component{
  constructor(props){
    super(props)

    this.state = {
      username: 'yhailu'
    }

    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(e){
    this.setState({
      username: e.target.value
    })
  }
  render(){
    return(
      <div>
        Hello {this.state.username} <br/>
        Change name:
          <input
            type = "text"
            value={this.state.username}
            onChange={this.handleChange}
            />
      </div>

    );
  }
}

export {HelloUser}
export default App;
