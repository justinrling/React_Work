import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput';
import UserInput from './UserInput';

class App extends Component {
  state = {
    users: [
      {username: "JUSTINLING"},
      {username: "BUBBLES"},
      {username: "CYNEO"}
    ]
  }

  changeUsernameHandler = () => {
    this.setState({
      users:[
        {username: "justinling"},
        {username: "bubbles"},
        {username: "cyneo"}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      users:[
        {username: event.target.value},
        {username: event.target.value},
        {username: event.target.value}
      ]
    })
  }

  render() {

    return (
      <div className="App">
        <h1>Assignment 1</h1>
        <UserOutput click={this.changeUsernameHandler} username={this.state.users[0].username}/>
        <UserInput changed={this.nameChangeHandler} username={this.state.users[0].username}/>
        <UserOutput username={this.state.users[1].username}/>
        <UserOutput username={this.state.users[2].username}/>
      </div>
    );
  }
}

export default App;
