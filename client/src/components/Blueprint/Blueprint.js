import React, { Component } from 'react';
import { connect } from 'react-redux';

import Hero from '../Hero/Hero';
import { fetchAnswers } from '../../actions/answerActions';

import css from './Blueprint.css';
import { copy, images } from './Blueprint.data.js';

class Blueprint extends Component {

  componentWillMount() {
    let userId;

    if (this.props.match && this.props.match.params) {
      userId = this.props.match.params._id;
    }

    this.props.fetchAnswers(userId);
  }

  render() {

    const answers = this.props.answers;

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
          <img src={images.audience} />
          <div className="blueprint-audience-text">
            <h2>{copy.audienceTitle}</h2>
            <p>{copy.audienceText1}</p>
            <p>{copy.audienceText2}</p>
          </div>
        </div>

        <div className="buyer-persona">
          <h2>{copy.buyerDemographicsTitle}</h2>
          <div className="buyer-persona-wrapper">
            <div className="buyer-persona-section buyer-persona-age">
              <img src={images.audienceAgeYoung} />
              <h3>Age group</h3>
            </div>
            <div className="buyer-persona-section buyer-persona-sex">
              <img src={images.audienceSexMale} />
              <h3>Sex</h3>
            </div>
            <div className="buyer-persona-section buyer-persona-income">
              <p>$500,000</p>
              <h3>Income</h3>
            </div>
            <div className="buyer-persona-description">
            </div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Blueprint);
