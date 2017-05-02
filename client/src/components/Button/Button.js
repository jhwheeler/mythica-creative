import React from 'react';

import css from './Button.css';

export default class Button extends React.Component {
  render() {
    return (
      <input className="button" type="button" value={this.props.label} />
    );
  }
}
