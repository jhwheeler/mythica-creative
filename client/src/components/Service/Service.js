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
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
    return this.state.isModalOpen;
  }

  render() {
    const { icon, header, description } = this.props.service;
    return (
      <div className="service">
        <img src={icon} onClick={() => this.toggleModal()} />
        <h3>{header}</h3>
        <p>{description}</p>
        <Button label="EXPLORE" onClick={() => this.toggleModal()} />
        <Modal isOpen={this.state.isModalOpen} onClose={() => this.toggleModal()}>
          <h1>Modal title</h1>
          <p>Hello</p>
          <button onClick={() => this.toggleModal()}>Close</button>
        </Modal>
      </div>
    );
  }
}
