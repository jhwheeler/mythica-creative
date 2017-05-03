import React from 'react';

import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Projects from '../Projects/Projects';
import Testimonials from '../Testimonials/Testimonials';
import Founders from '../Founders/Founders';
import CTA from '../CTA/CTA';

import css from './Home.css';
import copy from './Home.data.js';

// Image Imports
import welcomeHero from '../../../public/images/hero/welcome-hero.jpg';
import logoHero from '../../../public/images/hero/logo_hero.png';
import mythica from '../../../public/images/hero/mythica.png';
import creative from '../../../public/images/hero/creative.png';
import globalReach from '../../../public/images/hero/global_reach_hero.jpg';

const Home = props => {
  return (
    <div className="home">

      <Header />

      <div className="home-hero-wrapper">
        <Hero backgroundImage={welcomeHero}>
          <div className="hero-content">
            <img src={logoHero} className="home-hero-logo" />
            <img src={mythica} className="home-hero-header" />
            <img src={creative} className="home-hero-header-2" />
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
        <Hero backgroundImage={globalReach}>
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
