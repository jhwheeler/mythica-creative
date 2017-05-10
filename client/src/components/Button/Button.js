import React from 'react';

import css from './Button.css';

export default class Button extends React.Component {
  render() {
    return (
      <button className="button">{this.props.label}</button>
    );
  }
}
