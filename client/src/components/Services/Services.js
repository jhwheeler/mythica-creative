import React from 'react';

import css from './Services.css';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import servicesData from './Services.data';

export default class Services extends React.Component {
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
      <div className="services">
        <h1 className="services-header">SERVICES</h1>
        <div className="services-wrapper">
          {servicesData.map((service, index) =>
            <div key={index} className="service">
              <img src={service.icon} />
              <h3>{service.header}</h3>
              <p>{service.description}</p>
              <Button label="EXPLORE" onClick={() => this.openModal()}/>
            </div>
          )}
        </div>
      </div>
    );
  }
}
