import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './AdviceButton.css';
import adviceIcon from '../../../public/images/quiz/advice_icon.png';

const AdviceButton = props => {
  return (
    <img
      className="advice-button"
      onClick={props.onClick}
      src={adviceIcon}
    />
  );
}

AdviceButton.PropTypes = {
  onClick: PropTypes.func,
}

export default AdviceButton;
