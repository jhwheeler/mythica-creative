import React from 'react';

import Button from '../Button/Button';

import css from './Service.css';

const Service = (props) => {
  return (
    <div className="service">
      <img src={props.icon} />
      <h3>{props.header}</h3>
      <p>{props.description}</p>
      <Button label="EXPLORE" />
    </div>
  );
}

export default Service;
