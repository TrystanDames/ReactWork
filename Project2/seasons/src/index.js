import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {lat: null, errorMessage: ''};
    };
    
    // Only use this if you dont want to use the constructor part
    //state = {lat: null, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }

    renderConetent() {
        if (this.state.errorMessage && !this.state.lat) {
            return (
                <div>
                    Error: {this.state.errorMessage}
                </div>
            );
        }

        if (!this.state.errorMessage && this.state.lat) {
            return(
                <SeasonDisplay lat={this.state.lat} />
            );
        }

        return (
            <Spinner message="Please accept location request." />
        );
    };

    render() {
        return (
            <div className="border red">
                {this.renderConetent()}
            </div>
        );
    };
}

ReactDom.render(
    <App />,
    document.querySelector('#root')
);