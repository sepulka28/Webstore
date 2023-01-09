import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../images/image1.jpg';
import Image2 from '../images/image2.jpg';
import Image3 from '../images/image3.jpg';

function Slider () {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="image_1"
          src={Image1}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image_2"
          src={Image2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image_3"
          src={Image3}
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
  