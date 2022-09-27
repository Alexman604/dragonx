    import React, { Component } from 'react';
import DragonServices from '../../services/fetchdata';
    import Spinner from '../spinner/spinner';
 
class AboutCompany extends Component {
    state = {
        about: {},
        headquaters: {},
        links: {}
        }

    getAboutData = new DragonServices;

    componentDidMount() {
        this.getAboutData.getAbout().then((about) => {
            this.setState ({
                about: about,
                headquaters: { ...about.headquaters},
                links: {...about.links},
            })
        }

        )
    }

    
    
    render() {
          const {
            about: {
              ceo,
              employees,
              founded,
              launch_sites,
              name,
              summary,
                  test_sites,
                  vehicles,
              valuation,
            },
            links,
            headquaters,
          } = this.state;  
        console.log(links);
            return (
              <div className="about">
                <h2>{name}</h2>
                <p>{summary}</p>
                <p>CEO, Head, Founder: {ceo}</p>
                <p>Company founded: {founded}</p>
                <p>Employees total: {employees}</p>
                <p>Launch sites: {launch_sites}</p>
                <p>Test sites: {test_sites}</p>
                <p>Vehicles: {vehicles} </p>
                <p>Valuation: {valuation}</p>
                <button type="button" class="btn btn-info">
                  <a href={links.elon_twitter}>Elon Twitter</a>
                </button>
                <button type="button" class="btn btn-info">
                  <a href={links.flickr}>Flickr</a>
                </button>
                <button type="button" class="btn btn-info">
                  <a href={links.twitter}>Twitter</a>
                </button>
                <button type="button" class="btn btn-info">
                  <a href={links.website}>SpaceX</a>
                </button>
              </div>
            );
        }
    }

    
    export default AboutCompany;
    