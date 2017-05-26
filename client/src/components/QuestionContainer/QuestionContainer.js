import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Hero from '../Hero/Hero';
import Question from '../Question/Question';

import css from './QuestionContainer.css';

export default class QuestionContainer extends Component {
  constructor(props) {
    super(props);
    this.renderQuestions = this.renderQuestions.bind(this);
    this.updateSubQuestion = this.updateSubQuestion.bind(this);
  }

  updateSubQuestion() {
    this.setState({currentSubQuestion: this.state.currentSubQuestion + 1})
  }

  renderQuestions(question) {
    if (question.component === "combined") {
      return (
       <div className="multi-question-container">
         <label className="multi-question-label">{question.text}</label>
         <div className="multi-question-wrapper">
           {question.subQuestions.map((subQuestion, index) => (
             <Question
               question={subQuestion}
               key={index}
             />
           ))}
         </div>
       </div>
      )} else {
       return (
         <Question
           question={question}
         />
       )
     }
  }

  render() {
    return (
      <div className="question-container">
        {this.renderQuestions(this.props.question)}
      </div>
    )
  }
}

QuestionContainer.PropTypes = {
  question: PropTypes.object.isRequired,
}
