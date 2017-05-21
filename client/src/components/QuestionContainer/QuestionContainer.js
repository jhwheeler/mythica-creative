import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Hero from '../Hero/Hero';
import Question from '../Question/Question';

import css from './QuestionContainer.css';

export default class QuestionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSubQuestion: 0
    }
    this.renderQuestions = this.renderQuestions.bind(this);
    this.updateSubQuestion = this.updateSubQuestion.bind(this);
  }

  /*
  setButtonText(props) {
    if (props.id === 1) {
      props.buttonText = "Start";
      props.backButtonText = null;
    }
    else if (props.id === 9) {
      props.buttonText = "Done";
      props.backButtonText = "Back";
    } else {
      props.buttonText = "Next";
      props.backButtonText = "Back";
    }
  }
  */

  updateSubQuestion() {
    this.setState({currentSubQuestion: this.state.currentSubQuestion + 1})
  }

  renderQuestions(props) {
    if (props.question.component === "combined") {
     return props.question.subQuestions.map((subQuestion, index) =>
        <Question
          question={subQuestion}
        />
     )} else if (props.question.component === "multiple") {
       return props.question.subQuestions.map((subQuestion, index) => {
         if (index <= this.state.currentSubQuestion) {
           <Question
             question={props.question.subQuestions[index]}
             key={index}
             onBlur={this.updateSubQuestion}
           />
         }
       })
     } else {
       <Question
         question={props.question}
       />
     }
  }

  /*
  renderButton(props) {
    if (props.backButtonText) {
      return (
        <div className="quiz-button">
          <button
            type="button"
            onClick={question.lastPage}
            className="question-back">
            {props.backButtonText}
          </button>
        </div>
      )
    }
    else if (props.buttonText) {
      return (
        <div className="quiz-button">
          <button
            type="submit"
            onClick={question.nextPage}
            className="question-submit">
            {props.buttonText}
          </button>
        </div>
      )
    } else return null;
  }
  */

  render() {
    return (
      <div className="question-container">
        <Hero backgroundImage={this.props.backgroundImage}>
          <div className="question-wrapper">
            {this.renderQuestions(this.props)}
          </div>
        </Hero>
      </div>
    )
  }
}

QuestionContainer.PropTypes = {
  question: PropTypes.object.isRequired,
}
