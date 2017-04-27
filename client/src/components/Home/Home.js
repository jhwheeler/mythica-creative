import React from 'react';

import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Service from '../Service/Service';

import css from './Home.css';
import welcomeHero from '../../../public/images/welcome-hero.jpg';
import webDesignIcon from '../../../public/images/web_design_icon.png';

const Home = (props) => {
  const services = [
    {
      icon: webDesignIcon,
      header: `Web`,
      description: `Using the latest technologies and trends, we provide sophisticated, responsive web design solutions that help you reach clients worldwide.`
    },
    {
      icon: webDesignIcon,
      header: `Brand`,
      description: `Using the latest technologies and trends, we provide sophisticated, responsive web design solutions that help you reach clients worldwide.`
    }
  ]
  return (
    <div>
      <Header />
      <div className="home-hero-wrapper">
        <Hero backgroundImage={welcomeHero}>
          <div className="home-hero">
            <h1>Mythica Creative</h1>
            <h2>Create Your Legend</h2>
          </div>
        </Hero>
      </div>
      <div className="services-wrapper">
        <h1 className="services">SERVICES</h1>
        {services.map((service) =>
          <Service
            icon={service.icon}
            header={service.header}
            description={service.description}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
