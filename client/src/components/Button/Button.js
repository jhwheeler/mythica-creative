import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import css from './Button.scss';

const Button = props => {
  return (
    <div className="button-wrapper">
      {props.link ? (
        <Link to={props.link}>
          <button className="button" onClick={props.onClick}>
            <div>{props.label}</div>
          </button>
        </Link>
      ) : (
        <button className="button" onClick={props.onClick}>
          <div>{props.label}</div>
        </button>
      )}
    </div>
  )}

Button.PropTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  link: PropTypes.string,
}


export default Button;
