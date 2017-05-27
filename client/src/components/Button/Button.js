import React from 'react';
import PropTypes from 'prop-types';

import css from './Button.css';

const Button = props => {
  return (
    <button className="button" onClick={props.onClick}>
      {props.link ? (
        <a href={props.link}>{props.label}</a>
      ) : (
        <div>{props.label}</div>
      )}
    </button>
  );
}

Button.PropTypes = {
  onClick: PropTypes.func.isRequired,
  link: PropTypes.string,
}


export default Button;
