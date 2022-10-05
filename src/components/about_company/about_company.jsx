import React, { Component } from "react";
import DragonServices from "../../services/fetchdata";
import Video from "../img/Untitled_4.mp4";

import "./about_company.css";

class AboutCompany extends Component {
  state = {
    about: {},
    headquaters: {},
  };

  getAboutData = new DragonServices();

  componentDidMount() {
    this.getAboutData.getAbout().then((about) => {
      this.setState({
        about: about,
        headquaters: about.headquarters,
      });
    });
  }

  render() {
    const {
      about: { ceo, employees, founded, launch_sites, name, summary, test_sites, vehicles, valuation },
      headquaters,
    } = this.state;

    return (
      <div className="about">
        <video className="video" src={Video} autoPlay muted loop>
          {" "}
        </video>
        <div className="text-wrapper">
          <h2>{name}</h2>
          <p>"{summary}"</p>
          <p>CEO, Head, Founder: {ceo}</p>
          <p>Company founded: {founded}</p>
          <p>Employees total: {employees}</p>
          <p>Launch sites: {launch_sites}</p>
          <p>Test sites: {test_sites}</p>
          <p>Vehicles: {vehicles} </p>
          <p>Valuation: {valuation}</p>
          <p>
            Headquarter: {headquaters.state}, {headquaters.city}, {headquaters.address}
          </p>
        </div>
      </div>
    );
  }
}

export default AboutCompany;
