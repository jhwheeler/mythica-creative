import React from 'react';

import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Button from '../Button/Button';
import Footer from '../Footer/Footer';

import congratulationsHero from '../../../public/images/hero/congratulations-hero.jpg';
import css from './Congratulations.css';

const Congratulations = () => {
  return (
    <div className="congratulations-container">

      <Header />

      <div className="congratulations">
        <Hero className="congratulations-hero" backgroundImage={congratulationsHero}>
          <div className="congratulations-text">
            <h1>Congratulations!</h1>
            <p>Great job completing the quiz.</p>
            <p>What's next?</p>
            <p>Well first, we're going to take your answers and turn them into an interactive web page <em>just for you</em>: your <strong>Brand Blueprint</strong>.</p>
            <p>You'll be able to print this out and use it to build the foundation of your future brand.</p>
            <p>So keep your eyes on your email over the next day or so, and we'll get your Brand Blueprint to you in no time.</p>
            <p>If you have any questions before that, feel free to write to us at hello@mmythicacreative.com</p>.
            <p>In the meantime, keep on shining!</p>
          </div>
        </Hero>
      </div>

    <Footer />

    </div>
  )
}

export default Congratulations;
