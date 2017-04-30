import React from 'react';

import css from './Testimonial.css';

const Testimonial = (props) => {
  return (
    <div className="testimonial">
      <img src={props.headshot} />
      <h2>{props.name}</h2>
      <p>{props.quote}</p>
    </div>
  );
}

export default Testimonial;
