import React from 'react';

// import css from './Service.css';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

export default class Service extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    }
  }

  openModal() {
    console.log("open");
    this.setState({
      isModalOpen: true
    });
  }

  closeModal() {
    this.setState({
      isModalOpen: false
    });
    console.log("close");
  }

  render() {
    const { icon, header, description } = this.props.service;
    return (
      <div className="service">
        <img src={icon} />
        <h3>{header}</h3>
        <p>{description}</p>
        <Button label="EXPLORE" onClick={() => this.openModal()}/>
        <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <h1>Modal title</h1>
          <p>Hello</p>
          <button onClick={() => this.closeModal()}>Close</button>
        </Modal>
      </div>
    );
  }
}
