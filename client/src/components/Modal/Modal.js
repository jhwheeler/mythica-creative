import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Modal.css';

export default class Modal extends Component {
  close(e) {
    e.preventDefault();

    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  /*
  componentWillMount() {
    document.body.classList.add('modal-open');
  }
  componentWillUnmount() {
    document.body.classList.remove('modal-open');
  }
  */

  render() {
    if(this.props.isOpen === false) {
      return null;
    }

    return (
      <div>
        <div className="modal">{this.props.children}</div>
        <div className="backdrop" onClick={e => this.close(e)} />
      </div>
    );
  }
}

Modal.PropTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  children: PropTypes.any,
}
