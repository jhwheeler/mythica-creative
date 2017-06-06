import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './AdviceButton.css';
import adviceIcon from '../../../public/images/quiz/advice_icon.png';

const AdviceButton = props => {
  const adviceButtonClass = classNames({
    'advice-button': true,
    'advice-button-pulse': !props.isAdviceShown && props.showAdvicePulse,
  });

  return (
    <div className="advice-button-wrapper">
      <img
        className={adviceButtonClass}
        onClick={props.onClick}
        src={adviceIcon}
      />
      {!props.isAdviceShown &&
        <div className="advice-slider-preview">
        </div>
      }
  </div>
  );
}

AdviceButton.PropTypes = {
  onClick: PropTypes.func,
  isAdviceShown: PropTypes.bool,
}

export default AdviceButton;
