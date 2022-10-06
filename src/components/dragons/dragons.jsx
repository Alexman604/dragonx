import React, { Component } from "react";
import CarouselImages from "../../carousel/carousel";
import DragonServices from "../../services/fetchdata";
import DragonItemByiD from "../dragon_item/dragon_item";
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
        dragonId: null,
      });
    });
  }
  onBack = () => {
    this.setState({ dragonId: null });
  };
  onDragon = (id) => {
    this.setState({ dragonId: id });
    console.log(this.state.dragonId);
  };

  render() {
    const { data, dragonId } = this.state;
    return <div className="wrapper">{dragonId ? <DragonItemByiD onBack={this.onBack} dragonId={dragonId} data={data} /> : <DragonsList data={data} onDragon={this.onDragon} />}</div>;
  }
}

const DragonsList = ({ data, onDragon }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <div className="dragon" key={item.id}>
            <div className="description">
              <h2 onClick={() => onDragon(item.id)}>{item.name} </h2>
              <p>{item.description} </p>
            </div>

            <div id="dragonCarousel">
              <CarouselImages images={item.images} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Dragons;
