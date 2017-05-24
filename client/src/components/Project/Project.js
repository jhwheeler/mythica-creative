import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import css from './Project.css';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

export default class Project extends Component {
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
    const { preview, presentation } = this.props;
    return (
      <div key={this.props.index} className="project">
        <img src={preview} onClick={() => this.toggleModal()}/>
        <Button label="EXPLORE" onClick={() => this.toggleModal()} />
        <Modal isOpen={this.state.isModalOpen} onClose={() => this.toggleModal()}>
          <img src={presentation} />
          <Button label="CLOSE" onClick={() => this.toggleModal()} />
        </Modal>
      </div>
    );
  }
}

Project.PropTypes = {
  preview: PropTypes.string.isRequired,
  presentation: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
}
