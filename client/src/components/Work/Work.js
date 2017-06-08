import React from 'react';

import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import CaseStudies from '../CaseStudies/CaseStudies';
import Portfolio from '../Portfolio/Portfolio';
import CTA from '../CTA/CTA';
import Footer from '../Footer/Footer';

import css from './Work.scss';
import { copy,images } from './Work.data.js';
import categories from '../Portfolio/Portfolio.data';

const Work = props => {
  return (
    <div className="work">

      <Header />

      <div className="work-hero-wrapper">
        <Hero backgroundImage={images.workHero}>
          <h1>{copy.bannerText}</h1>
        </Hero>
      </div>

      <div className="work-tagline">
        <h3>{copy.tagline1}</h3>
        <h3>{copy.tagline2}</h3>
      </div>

      <CaseStudies />

      <Portfolio
        categories={categories}
      />

      <CTA />

      <Footer />

    </div>
  );
}

export default Work;
