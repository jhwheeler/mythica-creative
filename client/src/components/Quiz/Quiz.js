import React, { Component } from 'react';
import { connect } from 'react-redux';

import QuestionContainer from '../QuestionContainer/QuestionContainer';
import AdviceSlider from '../AdviceSlider/AdviceSlider';
import AdviceButton from '../AdviceButton/AdviceButton';
import { Link } from 'react-router-dom';
import * as answerActions from '../../actions/answerActions';
import * as adviceActions from '../../actions/adviceActions';

import css from './Quiz.css';
import data from '../../data/questions.json';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      isAdviceShown: false,
    }

    this.nextPage = this.nextPage.bind(this);
    this.lastPage = this.lastPage.bind(this);
    this.renderButtons = this.renderButtons.bind(this);
    this.getButtonText = this.getButtonText.bind(this);
    this.submitClick = this.submitClick.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.getAdvice = this.getAdvice.bind(this);
    this.getAdviceHeader = this.getAdviceHeader.bind(this);
    this.toggleAdviceSlider = this.toggleAdviceSlider.bind(this);
  }

  nextPage() {
    this.setState({page: this.state.page + 1});
    if (this.state.isAdviceShown) {
      this.toggleAdviceSlider();
    }
  }

  lastPage() {
    this.setState({page: this.state.page - 1});
    if (this.state.isAdviceShown) {
      this.toggleAdviceSlider();
    }
  }

  renderButtons() {
    let { buttonText, backButtonText } = this.getButtonText();
    return (
      <div className="quiz-button-wrapper">
        {backButtonText &&
          <div className="quiz-button">
            <button
              type="button"
              onClick={this.lastPage}
              className="question-back">
              {backButtonText}
            </button>
          </div>
        }
        <div className="quiz-button">
          <button
            type="submit"
            onClick={this.submitClick}
            className="question-submit">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }

  getButtonText() {
    let buttonText, backButtonText;
    if (this.state.page === 0) {
      buttonText = "Start";
      backButtonText = null;
    }
    else if (this.state.page === data.questions.length - 1) {
      buttonText = "Done";
      backButtonText = "Back";
    } else {
      buttonText = "Next";
      backButtonText = "Back";
    }
    return {
      buttonText,
      backButtonText
    }
  }

  getAdvice(currentQuestion) {
    let advice = currentQuestion.advice;
    if (advice !== undefined) {
      return advice;
    } else return null;
  }

  getAdviceHeader(currentQuestion) {
    let adviceHeader = currentQuestion.adviceHeader;
    if (adviceHeader !== undefined) {
      return adviceHeader;
    } else return null;
  }

  toggleAdviceSlider() {
    this.setState({
      isAdviceShown: !this.state.isAdviceShown,
    });
    return this.state.isAdviceShown;
  }

  submitForm(values) {
    this.props.sendAnswers(values);
  }

  submitClick() {
    if (this.state.page === data.questions.length - 1) {
      this.submitForm(this.props.form.quiz.values);
    } else {
      this.nextPage();
    }
  }

  render() {
    const currentQuestion = data.questions[this.state.page];
    return (
      <div className="quiz">
        <QuestionContainer question={currentQuestion} />
        {this.renderButtons()}
        {currentQuestion.advice &&
          <div className="advice-wrapper">
            <AdviceButton
              onClick={this.toggleAdviceSlider}
              isAdviceShown={this.state.isAdviceShown} />
            <AdviceSlider
              adviceHeader={this.getAdviceHeader(currentQuestion)}
              advice={this.getAdvice(currentQuestion)}
              isOpen={this.state.isAdviceShown}
              onClose={this.toggleAdviceSlider}
            />
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    advice: state.advice,
    form: state.form,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    sendAnswers: answers => dispatch(answerActions.sendAnswers(answers)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
