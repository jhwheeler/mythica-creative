import React from 'react';

import Hero from '../Hero/Hero';
import Button from '../Button/Button';

import css from './CTA.css';
import copy from './CTA.data';
import heroCTA from '../../../public/images/home-cta.jpg';

const CTA = () => {
  const { header, body, link, buttonLabel } = copy;
  return(
    <div className="cta">
      <Hero backgroundImage={heroCTA}>
        <h1>{header}</h1>
        <br/>
        <h3>{body}</h3>
        <br/>
        <Button label={buttonLabel} link={link} />
      </Hero>
    </div>
  );
}

export default CTA;
