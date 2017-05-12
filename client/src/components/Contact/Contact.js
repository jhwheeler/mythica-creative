import React from 'react';

import Hero from '../Hero/Hero';
import Button from '../Button/Button';

import css from './Contact.css';
import contactHero from '../../../public/images/hero/ContactUs.jpg';

const Contact = props => {
  return (
    <div className="contact">
      <Hero className="contact-hero" backgroundImage={contactHero}>
        <div className="contact-form-wrapper">
          <form class="contact-form">
            <fieldset name="contact-info">
              <label for="name" className="visually-hidden">Your Name</label>
              <br/>
              <input className="input" type="text" name="name" placeholder="Your Name" id="name" />
              <label for="email" className="visually-hidden">Your Email</label>
              <br/>
              <input className="input" type="email" name="email" placeholder="Your Email" id="email" />
              <br/>
              <label for="message" className="visually-hidden">What's on your mind?</label>
              <br/>
              <textarea name="message" placeholder="What's on your mind?" id="message" />
              <Button className="contact-button" label="START" />
            </fieldset>
          </form>
        </div>
      </Hero>
    </div>
  );
}

export default Contact;
