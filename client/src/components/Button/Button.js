import React from 'react';

import css from './Button.css';

const Button = (props) => {
  return (
    <button className="button" onClick={props.onClick}>{props.label}</button>
  );
}

export default Button;
