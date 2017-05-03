import React from 'react';

import Hero from '../Hero/Hero';
import Button from '../Button/Button';

import css from './CTA.css';
import copy from './CTA.data';
import homeCTA from '../../../public/images/home-cta.jpg';

const CTA = () => {
  return(
    <div className="home-cta">
      <Hero backgroundImage={homeCTA}>
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
