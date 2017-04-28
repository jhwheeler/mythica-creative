import React from 'react';

import css from './Testimonial.css';

const Testimonial = (props) => {
  return (
    <div className="testimonial">
      <img src={props.headshot} />
      <h3>{props.name}</h3>
      <p>{props.quote}</p>
    </div>
  );
}

export default Testimonial;
