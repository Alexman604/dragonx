import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../img/spacex.svg"
import "./header.css"

class Header extends Component {
    render() {
        return (
          <header>
            <div className="header-inner">
                    
            <img src={Logo} alt="Spacex logo" />
                    
              <div className="navigation">
                <ul className="nav-links">
                  <li className="nav-item">
                    <Link to={"/"}>
                      <span> ABOUT SPACEX </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/capsules"}>
                      <span>CAPSULES</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/crew"}>
                      <span>CREW</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/dragons"}>
                      <span>DRAGONS</span>
                    </Link>
                  </li>
                </ul>
              </div>
                <div className='login'> LOGIN</div>

            </div>
          </header>
        );
    }
}

export default Header;
