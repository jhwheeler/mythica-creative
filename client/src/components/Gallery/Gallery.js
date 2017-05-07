import React from 'react';
import Slider from 'react-slick';

import css from './Gallery.css';

class Gallery extends React.Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      draggable: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    }

    return (
      <Slider {...settings}>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
        <div><h3>6</h3></div>
      </Slider>);
  }
}

export default Gallery;
