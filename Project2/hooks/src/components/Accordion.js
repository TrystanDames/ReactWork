import React, {Component} from 'react';

class Accordion extends Component {

    constructor(props) {
        super(props)
    };
    
    render() {
        return(
            <h1>
                {this.props.items.length}
            </h1>
        );
    };
}

export default Accordion;