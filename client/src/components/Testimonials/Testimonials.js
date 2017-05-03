import React from 'react';

import css from './Testimonials.css';
import testimonialsData from './Testimonials.data';

const Testimonials = props => {
  return (
    <div className="testimonials">
      <h1 className="testimonials-header">WHAT OUR CLIENTS ARE SAYING...</h1>
      <div className="testimonials-wrapper">
        {testimonialsData.map((testimonial, index) =>
          <div key={index} className="testimonial">
            <img src={testimonial.headshot} />
            <h2>{testimonial.name}</h2>
            <p>{testimonial.quote}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Testimonials;
