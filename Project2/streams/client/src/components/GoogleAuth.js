import React, {Component} from 'react';

class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: 727787217366-rggk9190oc8gle292ogmqgkdhlrnv6m1.apps.googleusercontent.com,
                scope: 'email'
            });
        });
    }

    render() {
        return(
            <div>
                Google Auth
            </div>
        )
    }
}

export default GoogleAuth;