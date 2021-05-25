import React, {Component} from 'react';
import ReactDom from 'react-dom';

class App extends Component {
    render() {
        return( 
          <div className="ui container comments">
              <div className="comment">
                  <a href="/" className="avatar">
                      <img alt="avatar" />
                  </a>
                  <div className="content">
                      <a href="/" className="author">
                          Sam
                      </a>
                      <div className="metadata">
                          <span className="date">Today at 06:00pm</span>
                      </div>
                      <div className="text">Nice blog post!</div>
                  </div>
              </div>
          </div> 
        );
    };
}

ReactDom.render(
    <App />,
    document.querySelector('#root')
)