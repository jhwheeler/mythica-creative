import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import css from './AdviceSlider.css';

export default class AdviceSlider extends Component {
  close(e) {
    e.preventDefault();

    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  render() {
    if(this.props.isOpen === false) {
      return null;
    }

    return (
      <div className="advice-slider">
        <div className="advice-header">
          <h3>{this.props.adviceHeader}</h3>
          <Button onClick={this.props.onClose} label="Close" />
        </div>
        <div className="advice-text">
          <p>{this.props.advice}</p>
        </div>
      </div>
    );
  }
}

AdviceSlider.PropTypes = {
  adviceHeader: PropTypes.string,
  advice: PropTypes.string,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
}
