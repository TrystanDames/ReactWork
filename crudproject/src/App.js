import React, { Component } from 'react';
import 'firebase/firestore'
import firebase from 'firebase';

class App extends Component {

  constructor() {
    super();
    console.log(firebase);
  }

  render() {
    return (
      <div>
        <h1>Hi</h1>
      </div>
    );
  }
}

export default App;
