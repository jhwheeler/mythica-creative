import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './AdviceSlider.scss';

export default class AdviceSlider extends Component {
  close(e) {
    e.preventDefault();

    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  componentDidUpdate() {
    if (this.props.isOpen === true) {
      window.scrollTo(0, document.body.scrollHeight);
    }
  }

  render() {
    if(this.props.isOpen === false) {
      return null;
    }

    return (
      <div className="advice-slider">
        <h3 className="advice-header">{this.props.adviceHeader}</h3>
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
