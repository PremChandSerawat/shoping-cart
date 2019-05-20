import React, { Component } from 'react';
import { Jumbotron, Carousel } from 'react-bootstrap';
import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.png';
class CarouselRender extends Component {

  render() {
    return (
      <Jumbotron>
      <Carousel>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={image1}/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={image2}/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img width={900} height={500} alt="900x500" src={image3}/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Jumbotron>
    );
  }
}

export default CarouselRender;
