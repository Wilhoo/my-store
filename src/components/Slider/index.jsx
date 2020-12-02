import React from 'react';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css'

import { Container } from './styles';

import Slider1 from '../../assets/slider1.jpg'
import Slider2 from '../../assets/slider3.jpg'
import Slider3 from '../../assets/slider4.jpg'
import Slider4 from '../../assets/slider5.jpg'

const slideImages = [
  Slider1,
  Slider2,
  Slider3,
  Slider4
];

function Slider() {
  return (
    <Container>
      <Slide easing="ease">
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}} />
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}} />
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}} />
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[3]})`}} />
        </div>
      </Slide>
    </Container>
  );
}


export default Slider;