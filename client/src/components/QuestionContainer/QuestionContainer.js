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
