import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../Hero/Hero';

import congratulationsHero from '../../../public/images/hero/congratulations-hero.jpg';
import css from './Congratulations.scss';

const Congratulations = () => {
  return (
    <div className="congratulations-container">

      <div className="congratulations">
        <Hero className="congratulations-hero" backgroundImage={congratulationsHero}>
          <div className="congratulations-text">
            <h1>Congratulations!</h1>
            <p>Great job completing the quiz. What's next?</p>
            <p>Well first, we're going to take your answers and turn them into an interactive web page <em>just for you</em>: your <strong>Brand Blueprint.</strong> You'll be able to print this out and use it to build the foundation of your future brand.</p>
            <p>So keep your eyes on your email over the next day or so, and we'll get your Brand Blueprint to you in no time. If you have any questions before that, feel free to write to us at <a href="mailto:hello@mmythicacreative.com">hello@mythicacreative.com</a>.</p>
            <p>In the meantime, check out <Link to="/work">our work</Link> to get inspired. And don't forget: keep on shining!</p>
          </div>
        </Hero>
      </div>

    </div>
  )
}

export default Congratulations;
