import React, { Component } from "react";
import CarouselImages from "../../carousel/carousel";
import DragonServices from "../../services/fetchdata";
import "./dragons.css";

class Dragons extends Component {
  state = {
    data: [],
  };

  getDragonData = new DragonServices();
  componentDidMount() {
    this.getDragonData.getDragons().then((dragons) => {
      this.setState({
        data: [...dragons],
      });
    });
  }

  render() {
    const { data } = this.state;

    return (
      <div className="wrapper">
        {data.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <div className="dragon">
                <div className="description">
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <a href={item.wiki}>Wikipedia</a>
                </div>

                <div id="dragonCarousel" >
                          <CarouselImages images={item.images } /> 
                  
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default Dragons;
