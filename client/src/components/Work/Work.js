import React from 'react';

import Hero from '../Hero/Hero';
import CaseStudies from '../CaseStudies/CaseStudies';
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

      <div className="tagline">
        <h3>{copy.tagline1}</h3>
        <h3>{copy.tagline2}</h3>
      </div>

      <CaseStudies />

      <CTA />

    </div>
  );
}

export default Work;
