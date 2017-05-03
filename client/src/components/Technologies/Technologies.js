import React from 'react';

import css from './Technologies.css';
import technologiesData from './Technologies.data';

const Technology = props => {
  return (
    <div className="technologies-wrapper">
      <h2 className="technologies-header">Technologies We Use</h2>
        {technologiesData.map((technology, index) =>
          <div key={index} className="technology">
            <a href={technology.url} target="_blank">
              <img src={technology.logo} />
            </a>
          </div>
        )}
    </div>
  );
}

export default Technology;
