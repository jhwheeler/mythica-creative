import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Hero.scss';

export default class Hero extends Component {
  render() {
    const _style = {};
    if (this.props.backgroundImage) {
      _style.backgroundImage = `url(${this.props.backgroundImage})`;
    }

    return (
      <div className="hero" style={_style}>
        {this.props.children}
      </div>
    );
  }
}

Hero.PropTypes = {
  backgroundImage: PropTypes.string.isRequired,
  children: PropTypes.any,
}
