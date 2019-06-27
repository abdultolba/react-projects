import React, { Component } from "react";
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions';
import { CLIENT_ID } from "../config";

class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: CLIENT_ID,
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
      if(isSignedIn) {
          this.props.signIn();
      } else {
          this.props.signOut();
      }
  };

  onSignInClick = () => {
      this.auth.signIn();
  };

  onSignOutClick = () => {
      this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) return null;
    else if (this.state.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={this.onSignInClick}>
          <i className="google icon" />
          Sign in with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default connect(
    null,
    { signIn, signOut }
)(GoogleAuth);
