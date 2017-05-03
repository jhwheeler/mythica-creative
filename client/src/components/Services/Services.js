import React from 'react';

import css from './Services.css';
import Button from '../Button/Button';
import servicesData from './services.data';

const Services = (props) => {
  return (
    <div className="services">
      <h1 className="services-header">SERVICES</h1>
      <div className="services-wrapper">
        {servicesData.map((service, index) =>
          <div className="service">
            <img src={service.icon} />
            <h3>{service.header}</h3>
            <p>{service.description}</p>
            <Button label="EXPLORE" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Services;
