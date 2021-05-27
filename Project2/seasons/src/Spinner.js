import React, {Component} from 'react';

class Spinner extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="ui active dimmer">
                <div className="ui big text loader">
                    {this.props.message}
                </div>
            </div>
        )
    }
}

Spinner.defaultProps = {
    message: 'Loading...'
};

export default Spinner;