import React from 'react';

import Hero from '../Hero/Hero';
import CTA from '../CTA/CTA';

import css from './Work.css';
import { copy,images } from './Work.data.js';

const Work = props => {
  return (
    <div className="work">

      <div className="work-hero-wrapper">
        <Hero backgroundImage={images.workHero}>
          <h1>{copy.bannerText}</h1>
        </Hero>
      </div>
    </div>
  );
}

export default Work;
