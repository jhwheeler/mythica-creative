import React from 'react';

import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Projects from '../Projects/Projects';
import Testimonials from '../Testimonials/Testimonials';
import Founders from '../Founders/Founders';
import CTA from '../CTA/CTA';

import css from './Home.css';
import { copy,images } from './Home.data.js';

const Home = props => {
  return (
    <div className="home">

      <div className="home-hero-wrapper">
        <Hero backgroundImage={images.welcomeHero}>
          <div className="hero-content">
            <img src={images.logoHero} className="home-hero-logo" />
            <img src={images.mythica} className="home-hero-header" />
            <img src={images.creative} className="home-hero-header-2" />
            <h3 className="home-hero-subheader">{copy.mainSubHeader}</h3>
          </div>
        </Hero>
      </div>

      <div className="tagline">
        <h3>{copy.tagline1}</h3>
        <h3>{copy.tagline2}</h3>
      </div>

      <Services />

      <div className="global-reach-hero">
        <Hero backgroundImage={images.globalReach}>
          <div className="global-reach-hero-content hero-content">
            <h1>Global Reach</h1>
            <h2>{copy.globalReach1}</h2>
            <h2>{copy.globalReach2}</h2>
          </div>
        </Hero>
      </div>

      <Projects />

      <Testimonials />

      <Founders />

      <CTA />

    </div>
  );
}

export default Home;
