import React from 'react';

import css from './Hero.css';

export default class Hero extends React.Component {
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