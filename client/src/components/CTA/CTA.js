import React from 'react';

import Hero from '../Hero/Hero';
import Button from '../Button/Button';

import css from './CTA.css';
import copy from './CTA.data';
import heroCTA from '../../../public/images/home-cta.jpg';

const CTA = () => {
  return(
    <div className="cta">
      <Hero backgroundImage={heroCTA}>
        <h1>{copy.header}</h1>
        <br/>
        <h3>{copy.body}</h3>
        <br/>
        <Button label={copy.buttonLabel} />
      </Hero>
    </div>
  );
}

export default CTA;
