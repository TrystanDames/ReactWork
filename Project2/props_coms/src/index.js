import React, {Component} from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'

class App extends Component {
    render() {
        return( 
            <div className="ui container comments">              
               <CommentDetail />
               <CommentDetail />
               <CommentDetail />
               <CommentDetail />
               <CommentDetail />
            </div> 
        );
    };
}

ReactDom.render(
    <App />,
    document.querySelector('#root')
)