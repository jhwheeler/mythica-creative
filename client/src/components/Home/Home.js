import React from 'react';

import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Service from '../Service/Service';
import Project from '../Project/Project';
import Testimonial from '../Testimonial/Testimonial';

import css from './Home.css';

// Top Hero Image Imports
import welcomeHero from '../../../public/images/welcome-hero.jpg';
import logoHero from '../../../public/images/logo_hero.png';
import mythica from '../../../public/images/mythica.png';
import creative from '../../../public/images/creative.png';

// Services Imports
import webDesignIcon from '../../../public/images/web_design_icon.png';
import brandDesignIcon from '../../../public/images/brand_design_icon.png';
import printDesignIcon from '../../../public/images/print_design_icon.png';
import copyIcon from '../../../public/images/copy_icon.png';

import globalReach from '../../../public/images/global_reach_hero.jpg';

// Projects Imports
import ProjectWheeler from '../../../public/images/Project-WheelerExpeditions.jpg';
import ProjectInfinite from '../../../public/images/Project-InfiniteLoveHealing.jpg';
import ProjectAlhoff from '../../../public/images/Project-Alhoff.jpg';
import ProjectFreedom from '../../../public/images/Project-FreedomResearchFoundation.jpg';
import ProjectFlow from '../../../public/images/Project-FlowAlchemy.jpg';
import ProjectFemanna from '../../../public/images/Project-Femanna.jpg';

// Testimonial Imports
import LisaMeisels from '../../../public/images/LisaMeisels.png';
import RickWright from '../../../public/images/RickWright.png';
import JackWheeler from '../../../public/images/JackWheeler.png';
import ChristineMattschei from '../../../public/images/ChristineMattschei.png';

const Home = props => {
  const services = [
    {
      icon: webDesignIcon,
      header: 'WEB',
      description: 'Using the latest technologies and trends, we provide sophisticated, responsive web design solutions that help you reach clients worldwide.'
    },
    {
      icon: brandDesignIcon,
      header: 'BRAND',
      description: 'With over 10 years in the brand industry, we know exactly how to shape your corporate identity into an entrepreneurial legend.'
    },
    {
      icon: printDesignIcon,
      header: 'PRINT',
      description: 'Our attention to detail and stylistic precision give you the print materials to create the ideal impression of your services.'
    },
    {
      icon: copyIcon,
      header: 'COPY',
      description: 'Our writers are here to understand your business in depth and clearly express it in a way your customers will understand.'
    }
  ]

  const projects = [
    {
      preview: ProjectWheeler
   },
    {
      preview: ProjectInfinite
    },
    {
      preview: ProjectAlhoff
    },
    {
      preview: ProjectFreedom
    },
    {
      preview: ProjectFlow
    },
    {
      preview: ProjectFemanna
    },
  ]

  const testimonials = [
    {
      headshot: LisaMeisels,
      name: 'Lisa Meisels, Femanna',
      quote: 'Beautiful work! I\'m so impressed with what they\'ve done. I will definitely work with them again!'
    },
    {
      headshot: RickWright,
      name: 'Rick Wright, Wright Consultancy',
      quote: 'Excellent quality of work. A world-class collaboration and result!'
    },
    {
      headshot: JackWheeler,
      name: 'Dr. Jack Wheeler, Wheeler Expeditions',
      quote: 'Professional, innovative result that is both aesthetically beautiful and effective.'
    },
    {
      headshot: ChristineMattschei,
      name: 'Christine Mattschei, Flow Alchemy',
      quote: 'You really saw my vision and expanded on it, creating beautiful, elegant branding a lovely new website.'
    }
  ]

  return (
    <div className="home">
      <Header />
      <div className="home-hero-wrapper">
        <Hero backgroundImage={welcomeHero}>
          <div className="hero-content">
            <img src={logoHero} className="home-hero-logo" />
            <img src={mythica} className="home-hero-header" />
            <img src={creative} className="home-hero-header-2" />
            <h3 className="home-hero-subheader">CREATE YOUR LEGEND</h3>
          </div>
        </Hero>
      </div>
      <div className="tagline">
        <h2>THE MOST SUCCESSFUL BRANDS LAST FOR GENERATIONS. OUR MISSION IS TO CREATE MORE THAN JUST A STORY. WE ARE HERE TO CREATE YOUR LEGEND.</h2>
      </div>
      <div className="services">
        <h1 className="services-header">SERVICES</h1>
        <div className="services-wrapper">
        {services.map((service, index) =>
          <Service
            icon={service.icon}
            header={service.header}
            description={service.description}
            key={index}
          />
        )}
        </div>
      </div>
      <div className="global-reach-hero-wrapper">
        <Hero backgroundImage={globalReach}>
          <div className="global-reach-hero-content hero-content">
            <h1>Global Reach</h1>
            <h2>We are proud to serve clients all around the world.</h2>
            <h2>From Europe to America to Asia, we help people of all backgrounds shape their future.</h2>
          </div>
        </Hero>
      </div>
      <div className="projects">
        <h1 className="projects-header">PROJECTS</h1>
        <div className="projects-wrapper">
        {projects.map((project, index) =>
          <Project
            preview={project.preview}
            key={index}
          />
        )}
        </div>
      </div>
      <div className="testimonials">
        <h1 className="testimonials-header">WHAT OUR CLIENTS ARE SAYING...</h1>
        <div className="testimonials-wrapper">
        {testimonials.map((testimonial, index) =>
          <Testimonial
            headshot={testimonial.headshot}
            name={testimonial.name}
            quote={testimonial.quote}
            key={index}
          />
        )}
        </div>
      </div>
    </div>
  );
}

export default Home;