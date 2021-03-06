import React from 'react';

import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Button from '../Button/Button';
import Footer from '../Footer/Footer';

import css from './Contact.scss';
import contactHero from '../../../public/images/hero/ContactUs.jpg';

const Contact = () => {
  return (
    <div className="contact-container">

      <Header />

      <div className="contact">
        <Hero className="contact-hero" backgroundImage={contactHero}>
          <div className="contact-form-wrapper">
            <form className="contact-form">
              <fieldset name="contact-info">
                <label htmlFor="name" className="visually-hidden">Your Name</label>
                <br/>
                <input className="input" type="text" name="name" placeholder="Your Name" id="name" />
                <label htmlFor="email" className="visually-hidden">Your Email</label>
                <br/>
                <input className="input" type="email" name="email" placeholder="Your Email" id="email" />
                <br/>
                <label htmlFor="message" className="visually-hidden">What's on your mind?</label>
                <br/>
                <textarea name="message" placeholder="What's on your mind?" id="message" />
                <Button className="contact-button" label="START" />
              </fieldset>
            </form>
          </div>
        </Hero>
      </div>

      <Footer />

    </div>
  );
}

export default Contact;
