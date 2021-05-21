import React, { Component } from 'react';
import firebase from 'firebase';
import User from './User';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {

  constructor() {
    super();
    console.log(firebase);
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={User} />
              <Route path="/*" component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

class NotFound extends Component {
  render(){
    return <div>Not Found</div>
  }
}
