import React from 'react';

import css from './Projects.css';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import images from './Projects.data';

export default class Projects extends React.Component {
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
    return (
        <div className="projects">
          <h1 className="projects-header">PROJECTS</h1>
          <div className="projects-wrapper">
            {images.map((project, index) =>
              <div key={index} className="project">
                <img src={project.preview} />
                <Button label="EXPLORE" onClick={() => this.toggleModal()} />
                <Modal isOpen={this.state.isModalOpen} onClose={() => this.toggleModal()}>
                  <img src={project.presentation} />
                  <button onClick={() => this.toggleModal()}>Close</button>
                </Modal>
              </div>
            )}
          </div>
        </div>
    );
  }
}
