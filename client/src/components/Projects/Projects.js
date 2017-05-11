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

  openModal() {
    this.setState({
      isModalOpen: true
    });
  }

  closeModal() {
    this.setState({
      isModalOpen: false
    });
  }

  render() {
    return (
        <div className="projects">
          <h1 className="projects-header">PROJECTS</h1>
          <div className="projects-wrapper">
            {images.map((project, index) =>
              <div key={index} className="project">
                <img src={project.preview} />
                <Button label="EXPLORE" onClick={() => this.openModal()} />
                <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                  <img src={project.presentation} />
                  <button onClick={() => this.closeModal()}>Close</button>
                </Modal>
              </div>
            )}
          </div>
        </div>
    );
  }
}
