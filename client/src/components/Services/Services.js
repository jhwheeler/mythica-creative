import React from 'react';

import Service from '../Service/Service';
import servicesData from './Services.data';

import css from './Services.scss';

const Services = props => {
  return (
    <div className="services">
      <h1 className="services-header">SERVICES</h1>
      <div className="services-wrapper">
        {servicesData.map((service, index) =>
          <Service
            service={service}
            key={index}
          />
        )}
      </div>
    </div>
  );
}

export default Services;
