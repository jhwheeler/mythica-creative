import React from 'react';
import PropTypes from 'prop-types';

import css from './Button.css';

const Button = props => {
  return (
    <button className="button" onClick={props.onClick}>{props.label}</button>
  );
}

Button.PropTypes = {
  onClick: PropTypes.func.isRequired,
}


export default Button;
