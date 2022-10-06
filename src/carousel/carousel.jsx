import React, { Component } from "react";

import "./carousel.css";

class CarouselImages extends Component {
  state = {
    imageIndex: 0,
  };
  componentDidMount() {
    this.interval = setInterval(this.switchImage, 3000);
  }

  switchImage = () => {
    //  console.log("photos");
    if (this.state.imageIndex < this.props.images.length - 1) {
      this.setState({ imageIndex: this.state.imageIndex + 1 });
    } else {
      this.setState({ imageIndex: 0 });
    }
  };

  onLeftClick = () => {
    if (this.state.imageIndex === 0) {
      this.setState({ imageIndex: this.props.images.length - 1 });
    } else {
      this.setState({ imageIndex: this.state.imageIndex - 1 });
    }
    clearInterval(this.interval);
  };

  onRightClick = () => {
    if (this.state.imageIndex < this.props.images.length - 1) {
      this.setState({ imageIndex: this.state.imageIndex + 1 });
    } else {
      this.setState({ imageIndex: 0 });
    }
    clearInterval(this.interval);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div className="carousel-wrapper">
        <button onClick={this.onLeftClick}>
          <p> {"<"} </p>
        </button>

        <img className="photo" onClick={() => (this.interval = setInterval(this.switchImage, 3000))} src={this.props.images[this.state.imageIndex]} alt="dragon" />
        <button onClick={this.onRightClick}>{" > "}</button>
      </div>
    );
  }
}

export default CarouselImages;
