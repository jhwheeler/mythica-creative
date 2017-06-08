import React, { Component } from 'react';

import Hero from '../Hero/Hero';
import { fetchAnswers } from '../../actions/answerActions';

import css from './Blueprint.css';

import { copy, images } from './Blueprint.data.js';

export default class Blueprint extends Component {
  render() {
    return (
      <div className="blueprint">

        <div className="blueprint-hero">
          <Hero backgroundImage={images.blueprintHero}>
            <div className="blueprint-hero-logo">
              <img src={images.mythicaLogo} />
            </div>
            <div className="blueprint-hero-title">
              <h1>{copy.heroTitle}</h1>
            </div>
          </Hero>
        </div>

        <div className="blueprint-intro">
          <h2>Hi Jackson,</h2>
          <p>{copy.intro}</p>
        </div>

        <div className="blueprint-audience">
          <h2>{copy.audienceTitle}</h2>
          <p>{copy.audienceText1}</p>
          <p>{copy.audienceText2}</p>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    answers: state.answers
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAnswers: answers => dispatch(fetchAnswers(answers)),
  }
}
