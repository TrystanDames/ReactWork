import React, {Component} from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

class App extends Component {
    render() {
        return( 
            <div className="ui container comments">    
                <ApprovalCard>
                    <CommentDetail 
                        author="Sam"
                        timeAgo="Today at 16:45pm"
                        comment="Nice Post!"
                        avatar={faker.image.avatar()}
                    />
                </ApprovalCard>

                <ApprovalCard>
                    <CommentDetail
                        author="Alex"
                        timeAgo="Yesterday at 01:56am"
                        comment="This is epic!!!"
                        avatar={faker.image.avatar()}
                    />
                </ApprovalCard>
                
                <ApprovalCard>
                    <CommentDetail 
                        author="Jane"
                        timeAgo="2 Days Ago at 10:27am"
                        comment="You are a beast!"
                        avatar={faker.image.avatar()}
                    />
                </ApprovalCard>
            </div> 
        );
    };
}

ReactDom.render(
    <App />,
    document.querySelector('#root')
)