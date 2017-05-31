import React, { Component } from 'react';

// import css from './Service.css';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

export default class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    }
  }

  toggleModal() {
    document.body.classList.toggle('modal-open');
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
    return this.state.isModalOpen;
  }

  render() {
    const {
      icon,
      header,
      description,
      modalTitle,
      modalHeading1,
      modalHeading2,
      modalImage1,
      modalImage2,
      modalText1,
      modalText2,
      modalText3,
      modalText4,
    } = this.props.service;
    return (
      <div className="service">
        <img className="service-icon" src={icon} onClick={() => this.toggleModal()} />
        <h3>{header}</h3>
        <p className="service-description">{description}</p>
        <Button label="EXPLORE" onClick={() => this.toggleModal()} />
        <Modal isOpen={this.state.isModalOpen} onClose={() => this.toggleModal()}>
          <h1 className="service-modal-title">{modalTitle}</h1>
          <div className="modal-section">
            <img src={modalImage1} />
            <h2>{modalHeading1}</h2>
            <p>{modalText1}</p>
            <p>{modalText2}</p>
          </div>
          <div className="modal-section">
            <img src={modalImage2} />
            <h2>{modalHeading2}</h2>
            <p>{modalText3}</p>
            <p>{modalText4}</p>
          </div>
        </Modal>
      </div>
    );
  }
}
