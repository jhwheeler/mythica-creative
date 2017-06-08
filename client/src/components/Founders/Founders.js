import React from 'react';

import Technologies from '../Technologies/Technologies';

import css from './Founders.scss';
import copy from './Founders.data.js';

const Founders = () => {
  return(
    <div className="founders">
      <div className="about-us">
        <div className="about-content">
          <div className="about-text">
            <h1 className="about-header">{copy.header}</h1>
            <p>{copy.body1}</p>
            <br />
            <p>{copy.body2}</p>
          </div>
          <Technologies />
        </div>
        <div className="about-image"></div>
      </div>
      <div className="founders-quote">
        <h3>{copy.foundersQuote}</h3>
        <br/>
        <h3>{copy.founders}</h3>
      </div>
    </div>

  )
}

export default Founders;
