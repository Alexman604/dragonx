import React, { Component } from 'react';
import jwt_decode from "jwt-decode";

class GoogleLogin extends Component {
  
  
  handleCallbackResponse = (response) => {
    console.log("encoded JWT token", response.credential);
      let userObject = jwt_decode(response.credential);
      console.log(userObject);
     
      document.getElementById("login").innerHTML = `hello ${userObject.name}`;
  };

  componentDidMount() {
    /*global google*/
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_ID,
      callback: this.handleCallbackResponse,
    });
   
    google.accounts.id.renderButton(document.getElementById("login"), { theme: "outline", size: "small" });
  }

  render() {
    return <div></div>;
  }
}

export default GoogleLogin;


