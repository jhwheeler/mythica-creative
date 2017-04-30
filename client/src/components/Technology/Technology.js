import React from 'react';

import css from './Technology.css';

const Technology = props => {
  return (
    <div className="technology">
      <a href={props.url} target="_blank">
        <img src={props.logo} />
      </a>
      <a href={props.url} target="_blank">
        <h3>{props.name}</h3>
      </a>
    </div>
  );
}

export default Technology;
