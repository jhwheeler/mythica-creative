import React from 'react';

import css from './Modal.css';

class Modal extends React.Component {
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

  close(e) {
    e.preventDefault();

    if (this.props.onClose) {
      this.props.onClose();
  }
}
}

export default Modal;
