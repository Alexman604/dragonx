import React, { Component } from "react";
import DragonServices from "../../services/fetchdata";
import "./footer.css";

class Footer extends Component {
  state = {
    links: {},
  };

  getLinks = new DragonServices();

  componentDidMount() {
    this.getLinks.getAbout().then((about) => {
      this.setState({
        links: { ...about.links },
      });
    });
  }

  render() {
    const { links } = this.state;
    return (
      <footer>
        <div className="links1">
          <ul>
            <li>
              <a target="_blank" rel="noreferrer" href={links.elon_twitter}>
                Elon Twitter
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href={links.flickr}>
                Flickr
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href={links.twitter}>
                Twitter
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href={links.website}>
                SpaceX
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.youtube.com/spacex">
                YouTube
              </a>
            </li>
          </ul>
        </div>
        <p>made by AlexP @2022</p>
      </footer>
    );
  }
}

export default Footer;
