import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './AdviceButton.css';

const AdviceButton = props => <div className="advice-button" onClick={props.onClick}></div>;

AdviceButton.PropTypes = {
  onClick: PropTypes.func,
}

export default AdviceButton;
