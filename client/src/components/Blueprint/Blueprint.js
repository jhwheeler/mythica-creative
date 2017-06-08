import React, { Component } from 'react';
import { connect } from 'react-redux';

import Hero from '../Hero/Hero';
import { fetchAnswers } from '../../actions/answerActions';

import css from './Blueprint.scss';
import { copy } from './Blueprint.data.js';

class Blueprint extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let userId;
    if (this.props.match && this.props.match.params) {
      userId = this.props.match.params._id;
    }
    this.props.fetchAnswers(userId);
  }

  getBuyerPersonaAge = answers => {
    const ages = answers.filter((el) => {
      return (el === "young" || el === "middle-aged" || el === "elderly");
    });
    return ages;
  }

  getBuyerPersonaSex = answers => {
    const sex = answers.filter((el) => {
      return (el === "male" || el === "female" || el === "other");
    });
    return sex;
  }

  getVisualStyle = answers => {
    const style = answers.filter((el) => {
      return (el === "corporate" || el === "rustic" || el === "modern" || el === "minimalist" || el === "luxury");
    });
    return style;
  }

  getProducts = answers => {
    const products = answers.filter((el) => {
      return (el === "logo" || el === "brand" || el === "website" || el === "app" || el === "landing-page");
    });
    return products;
  }

  render() {
    const answers = this.props.answers;
    const answerKeys = Object.keys(answers);
    const age = this.getBuyerPersonaAge(answerKeys);
    const sex = this.getBuyerPersonaSex(answerKeys);
    const style = this.getVisualStyle(answerKeys);
    const products = this.getProducts(answerKeys);

    return (
      <div className="blueprint">

        <div className="blueprint-hero">
          <Hero backgroundImage={'/images/hero/blueprint-hero.jpg'}>
            <div className="blueprint-hero-logo">
              <img src={`/images/hero/logo_hero.png`} />
            </div>
            <div className="blueprint-hero-title">
              <h1>{copy.heroTitle}</h1>
            </div>
          </Hero>
        </div>

        <div className="blueprint-intro">
          <h2>Hi {answers['info-name']},</h2>
          <p>{copy.intro}</p>
        </div>

        <div className="blueprint-audience">
          <img src={`/images/blueprint/audience.png`} />
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
              <div className="buyer-persona-ages">
                {age.map(value => {
                    <div className="buyer-persona-age-image">
                      <img src={`/images/quiz/audience-age-${value}.png`} />
                      {console.log(value)};
                      {console.log(age)};
                    </div>
                  })
              }
              </div>
              <h3>Age group</h3>
            </div>
            <div className="buyer-persona-section buyer-persona-sex">
              <div className="buyer-persona-sex">
                {sex.map(value => {
                    <div className="buyer-persona-sex-image">
                      <img src={`/images/quiz/audience-sex-${value}.png`} />
                      {console.log(value)};
                      {console.log(sex)};
                    </div>
                  })
              }
              </div>
              <h3>Sex</h3>
            </div>
            <div className="buyer-persona-section buyer-persona-income">
              <p>{answers['audience-income']}</p>
              <h3>Income</h3>
            </div>
          </div>
        </div>

        <div className="buyer-description">
          <h2>{copy.buyerDescriptionTitle}</h2>
          <p>"{answers['description-audience']}"</p>
          <h2>{copy.solutionTitle}</h2>
          <p>"{answers['description-solution']}"</p>
        </div>

        <div className="blueprint-contrast-section buyer-exercise">
          <img src={`/images/blueprint/exercise.png`} />
          <div className="blueprint-audience-text">
            <h2>{copy.buyerExerciseTitle}</h2>
            <p>{copy.buyerExerciseText1}</p>
            <p>{copy.buyerExerciseText2}</p>
          </div>
        </div>

        <div className="mission-vision">
          <div className="mission-vision-text">
            <h2>{copy.missionVisionTitle}</h2>
            <p>{copy.missionVisionText1}</p>
            <p>{copy.missionVisionText2}</p>
            <p>{copy.missionVisionText3}</p>
          </div>
        </div>

        <div className="your-mission-vision">
          <div className="your-mission-vision-text">
            <h2>{copy.visionTitle}</h2>
            <p>"{answers.vision}"</p>
            <h2>{copy.missionTitle}</h2>
            <p>"{answers.mission}"</p>
          </div>
        </div>

        <div className="vision-exercise">
          <div className="vision-exercise-text">
            <h2>{copy.visionExerciseTitle}</h2>
            <p>{copy.visionExerciseText1}</p>
            <p>{copy.visionExerciseText2}</p>
            <p>{copy.visionExerciseText3}</p>
            <p>{copy.visionExerciseText4}</p>
          </div>
        </div>

        <div className="visual-message">
          <div className="visual-message-text">
            <h2>{copy.visualStyleTitle}</h2>
            <p>{copy.visualStyleText}</p>
            <div className="visual-message-images">
              {style.map(value => {
                  <div className="visual-message-image">
                    <img src={`/images/quiz/style-minimalist.png`} />
                    {console.log(value)};
                    {console.log(style)};
                  </div>
                })
              }
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
