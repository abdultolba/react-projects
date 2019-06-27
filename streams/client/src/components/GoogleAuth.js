import React, { Component } from 'react';
import { CLIENT_ID } from '../config';

class GoogleAuth extends Component {
    state = { isSignedIn: null };

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: CLIENT_ID,
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    }

    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return <div>I don't kmow if you're signed in.</div>
        } else if(this.state.isSignedIn){
            return <div>I am signed in.</div>
        } else {
            return <div>I am not signed in.</div>
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}

export default GoogleAuth;