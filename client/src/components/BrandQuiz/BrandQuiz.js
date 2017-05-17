import React, { Component } from 'react';

import Hero from '../Hero/Hero';
import Question from '../Question/Question';

import css from './BrandQuiz.css';
import welcomeHero from '../../../public/images/hero/welcome-hero.jpg';

export default class BrandQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: 1
    }

    this.nextQuestion = this.nextQuestion.bind(this);
    this.lastQuestion = this.lastQuestion.bind(this);
  }

  nextQuestion() {
    this.setState({question: this.state.question + 1});
  }

  lastQuestion() {
    this.setState({question: this.state.question - 1});
  }

  render() {
    const { onSubmit } = this.props;
    const { question } = this.state;
    return (
      <div className="brand-quiz">
        {
          question === 1 &&
            <div className="question-wrapper">
              <Hero backgroundImage={welcomeHero}>
                <Question
                  onSubmit={this.nextQuestion}
                  label="What's your name?"
                  placeholder="Captain Magnificent"
                  name="name"
                />
                <Question
                  lastQuestion={this.lastQuestion}
                  onSubmit={this.nextQuestion}
                  label="What's your email?"
                  name="email"
                  placeholder="thecaptain@gmail.com"
                  buttonText="Start"
                />
              </Hero>
            </div>
        }
        {
          question === 2 &&
            <div className="question-wrapper">
              <Hero backgroundImage={welcomeHero}>
                <Question
                  lastQuestion={this.lastQuestion}
                  onSubmit={this.onSubmit}
                  backgroundImage={welcomeHero}
                  label="Where do you live?"
                  name="location"
                  component= {location =>
                    <div>
                      <input type="text" {...location} placeholder="Location" />
                    </div>
                  }
                  backButtonText="Back"
                  buttonText="Submit"
                />
              </Hero>
            </div>
        }
      </div>
    )
  }
}
