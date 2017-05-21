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
  }

  setButtonText = props => {
    if (this.props.id === 1) {
      this.props.buttonText = "Start";
      this.props.backButtonText = null;
    }
    else if (this.props.id === 9) {
      this.props.buttonText = "Done";
      this.props.backButtonText = "Back";
    } else {
      this.props.buttonText = "Next";
      this.props.backButtonText = "Back";
    }
  }

  updateSubQuestion = () => {
    this.setState({currentSubQuestion: this.state.currentSubQuestion + 1})
  }

  renderQuestions = props => {
    if (props.question.type === "combined") {
     return props.question.subQuestions.map((subQuestion, index) =>
        <Question
          question={question}
        />
     )} else if (props.question.type === "multiple") {
       return props.question.subQuestions.map((subQuestion, index) => {
         if (index <= this.state.currentSubQuestion) {
           <Question
             question={props.question.subQuestions[index]}
             onBlur={() => this.updateSubQuestion()}
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
        <Hero backgroundImage={props.backgroundImage}>
          <div className="question-wrapper">
            { props.type === "combined" &&
                <Question
                  question={props.question}
                  buttonText={() => setButtonText(props)}
                />
            }
          </div>
        </Hero>
      </div>
    )
  }
}

QuestionContainer.PropTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  buttonText: PropTypes.func.isRequired,
  backButtonText: PropTypes.func.isRequired,
}
