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

  renderQuestions(question) {
    if (question.component === "combined") {
     return question.subQuestions.map((subQuestion, index) =>
        <Question
          question={subQuestion}
        />
     )} else if (question.component === "multiple") {
       return question.subQuestions.map((subQuestion, index) => {
         if (index <= this.state.currentSubQuestion) {
           return (
             <Question
               question={question.subQuestions[index]}
               key={index}
               onBlur={this.updateSubQuestion}
             />
           )
         }
       })
     } else {
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
