import React, { Component } from 'react';

class GoogleLogin extends Component {
  handleCallbackResponse = (response) => {
    console.log("encoded JWT token", response);
  };

  componentDidMount() {
    /*global google*/
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_ID,
      callback: this.handleCallbackResponse(),
      
    });
   
    google.accounts.id.renderButton(document.getElementById("login"), { theme: "outline", size: "small" });
  }

  render() {
    return <div></div>;
  }
}

export default GoogleLogin;


