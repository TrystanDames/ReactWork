import React, {Component} from 'react';

class NewComponent extends Component {
    render() {

        return (
            <div>
                Let's get started with VSCode, {this.props.username}
            </div>
        );
    }
}

export default NewComponent;