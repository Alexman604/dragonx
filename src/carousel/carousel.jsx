import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class CarouselImages extends Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
    console.log(" updated");
  }
  render() {
    const { images } = this.props;

    return (
      <Carousel controls={false} indicators={true} slide={false}>
        {images.map((image) => {
          return (
            <Carousel.Item key={image}>
              <img className=" " src={`${image}`} alt="" />
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
}

export default CarouselImages;
