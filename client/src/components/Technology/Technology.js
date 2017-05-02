import React from 'react';

import css from './Technology.css';

const Technology = props => {
  return (
    <div className="technology">
      <a href={props.url} target="_blank">
        <img src={props.logo} />
      </a>
    </div>
  );
}

export default Technology;
