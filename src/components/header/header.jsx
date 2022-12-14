import React, { Component } from "react";
import { Link } from "react-router-dom";
import GoogleLogin from "../google_auth/google_login";
import Logo from "../img/spacex.svg";
import "./header.css";

class Header extends Component {
  state = {
    menuStatus: false,
  };
  showMenu = () => {
    this.setState(() => ({ menuStatus: !this.state.menuStatus }));
  };

  closeMenu = () => {
    this.setState(() => ({ menuStatus: false }));
  };
  render() {
    return (
      <header>
        <div className="header-inner">
          <div className="logo-burger">
            <img src={Logo} alt="Spacex logo" />

            <div className="navigation-button">
              <button onClick={this.showMenu}>
                <i className="bi bi-list"></i>
              </button>
            </div>
          </div>
          <div className={this.state.menuStatus ? "navigation" : "close-menu"}>
            <ul className="nav-links" onClick={this.closeMenu}>
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <li className="nav-item">
                  <span> ABOUT SPACEX </span>
                </li>
              </Link>

              <Link to={"/launches"} style={{ textDecoration: "none" }}>
                <li className="nav-item">
                  <span>LAUNCHES</span>
                </li>
              </Link>
              <Link to={"/crew"} style={{ textDecoration: "none" }}>
                <li className="nav-item">
                  <span>CREW</span>
                </li>
              </Link>
              <Link to={"/dragons"} style={{ textDecoration: "none" }}>
                <li className="nav-item">
                  <span>DRAGONS</span>
                </li>
              </Link>
            </ul>
          </div>
          {/* <div id="login"> LOGIN</div>
          <GoogleLogin /> */}
        </div>
      </header>
    );
  }
}

export default Header;
