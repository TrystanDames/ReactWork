import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NewComponent from './NewComponent';
import users from './data/data';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users
    }
  }

  getName = (number) => {
    const {users} = this.state;
    return users[number].name;
  }

  // getRandomName = () => {
  //   const {users} = this.state;
  //   return users[this.random()].name;
  // }

  // random = () => {
  //   const n = Math.floor((Math.random() * this.state.users.length) + 1);
  //   return n;
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <NewComponent username={this.getName(2)} />
      </div>
    ); 
  }
}

export default App;

