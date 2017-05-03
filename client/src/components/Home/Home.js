import React from 'react';

import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Project from '../Project/Project';
import Testimonial from '../Testimonial/Testimonial';
import Technology from '../Technology/Technology';
import Button from '../Button/Button';

import css from './Home.css';

// Hero Image Imports
import welcomeHero from '../../../public/images/hero/welcome-hero.jpg';
import logoHero from '../../../public/images/hero/logo_hero.png';
import mythica from '../../../public/images/hero/mythica.png';
import creative from '../../../public/images/hero/creative.png';
import globalReach from '../../../public/images/hero/global_reach_hero.jpg';
import homeContact from '../../../public/images/home-contact.jpg';

// Projects Imports
import ProjectWheeler from '../../../public/images/Project-WheelerExpeditions.jpg';
import ProjectInfinite from '../../../public/images/Project-InfiniteLoveHealing.jpg';
import ProjectAlhoff from '../../../public/images/Project-Alhoff.jpg';
import ProjectFreedom from '../../../public/images/Project-FreedomResearchFoundation.jpg';
import ProjectFlow from '../../../public/images/Project-FlowAlchemy.jpg';
import ProjectFemanna from '../../../public/images/Project-Femanna.jpg';

// Testimonials Imports
import LisaMeisels from '../../../public/images/testimonials/LisaMeisels.png';
import RickWright from '../../../public/images/testimonials/RickWright.png';
import JackWheeler from '../../../public/images/testimonials/JackWheeler.png';
import ChristineMattschei from '../../../public/images/testimonials/ChristineMattschei.png';

// Technologies Imports
import NodeLogo from '../../../public/images/technologies/NodeLogo.png';
import ReactLogo from '../../../public/images/technologies/ReactLogo.png';
import ReduxLogo from '../../../public/images/technologies/ReduxLogo.png';
import MongoDBLogo from '../../../public/images/technologies/MongoDBLogo.png';
import IllustratorLogo from '../../../public/images/technologies/IllustratorLogo.png';
import PhotoshopLogo from '../../../public/images/technologies/PhotoshopLogo.png';

const Home = props => {

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

  const technologies = [
    {
      name: 'NodeJS',
      logo: NodeLogo,
      url: 'https://nodejs.org/'
    },
    {
      name: 'ReactJS',
      logo: ReactLogo,
      url: 'https://facebook.github.io/react/'
    },
    {
      name: 'Redux',
      logo: ReduxLogo,
      url: 'http://redux.js.org/'
    },
    {
      name: 'MongoDB',
      logo: MongoDBLogo,
      url: 'https://www.mongodb.com/'
    },
    {
      name: 'Adobe Illustrator',
      logo: IllustratorLogo,
      url: 'http://www.adobe.com/products/illustrator.html'
    },
    {
      name: 'Adobe Photoshop',
      logo: PhotoshopLogo,
      url: 'http://www.adobe.com/products/photoshop.html'
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
        <h3>THE MOST SUCCESSFUL BRANDS LAST FOR GENERATIONS. OUR MISSION IS TO CREATE MORE THAN JUST A STORY.</h3>
        <h3>WE ARE HERE TO CREATE YOUR LEGEND.</h3>
      </div>

      <Services />

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

      <div className="about-us">
        <div className="about-content">
          <div className="about-text">
            <h1 className="about-header">Who Are We?</h1>
            <p>Mythica Creative is a web and brand agency dedicated to creating legendary brands that last for generations. From logo design and copywriting to web and print design, we provide the full brand package for every business.</p>
            <br />
            <p>With over 10 years’ experience in the industry, we know the ins and outs of creating a website that converts and a brand that customers love.</p>
          </div>
          <div className="technologies-wrapper">
            <h2 className="technologies-header">Technologies We Use</h2>
            {technologies.map((technology, index) =>
              <Technology
                logo={technology.logo}
                name={technology.name}
                url={technology.url}
                key={index}
              />
            )}
          </div>
        </div>
        <div className="about-image"></div>
      </div>
      <div className="founders-quote">
        <h3>“We are dedicated to helping conscious entrepreneurs reach wider audiences and impact the world in a real way by creating powerful brands and effective websites.”</h3>
        <br/>
        <h3> — Raya and Jackson, Founders of Mythica Creative</h3>
      </div>

      <div className="home-contact">
        <Hero backgroundImage={homeContact}>
          <h1>Ready to Create Your Legend?</h1>
          <br/>
          <h3>Take your business to the next level with a powerful brand and effective website.</h3>
          <br/>
          <Button label="BECOME A LEGEND!" />
        </Hero>
      </div>

    </div>
  );
}

export default Home;
