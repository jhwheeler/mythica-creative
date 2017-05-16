import React, { Component } from 'react';

import welcomeHero from '../../../public/images/hero/welcome-hero.jpg';

import Question from '../Question/Question';

export default class BrandQuiz extends Component {
  constructor(props) {
    super(props);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.lastQuestion = this.lastQuestion.bind(this);
    this.state = {
      question: 1
    }
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
            <Question
              onSubmit={this.nextQuestion}
              backgroundImage={welcomeHero}
              label="What's your name?"
              name="name"
              component= {name =>
                <div>
                  <input type="text" {...name} placeholder="Name" />
                </div>
              }
              buttonText="Get Started!"
            />
        }
        {
          question === 2 &&
            <Question
              lastQuestion={this.lastQuestion}
              onSubmit={this.nextQuestion}
              backgroundImage={welcomeHero}
              label="What's your email?"
              name="email"
              component= {email =>
                <div>
                  <input type="text" {...email} placeholder="Email" />
                </div>
              }
              buttonText="Next"
            />
        }
        {
          question === 3 &&
            <Question
              lastQuestion={this.lastQuestion}
              onSubmit={this.nextQuestion}
              backgroundImage={welcomeHero}
              label="Where do you live?"
              name="location"
              component= {location =>
                <div>
                  <input type="text" {...location} placeholder="Location" />
                </div>
              }
              buttonText="Next"
            />
        }
      </div>
    )
  }
}