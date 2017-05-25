import React, { Component } from 'react';
import { connect } from 'react-redux';

import QuestionContainer from '../QuestionContainer/QuestionContainer';

import css from './Quiz.css';
import data from '../../data/questions.json';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0
    }

    this.nextPage = this.nextPage.bind(this);
    this.lastPage = this.lastPage.bind(this);
    this.renderButtons = this.renderButtons.bind(this);
    this.getButtonText = this.getButtonText.bind(this);
  }

  nextPage() {
    this.setState({page: this.state.page + 1});
  }

  lastPage() {
    this.setState({page: this.state.page - 1});
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
            onClick={this.nextPage}
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

  render() {
    const currentQuestion = data.questions[this.state.page];
    return (
      <div className="quiz">
        <QuestionContainer
          question={currentQuestion}
        />
        {this.renderButtons()}
      </div>
    )
  }
}

const mapStateToProps = ({ advice }) => {
  return {
    advice,
  }
};

/*
const mapDispatchToProps = dispatch => {
  return {
    addUser: (name, email) => { dispatch(addUser(name, email)) }
  }
}
*/

export default connect(mapStateToProps)(Quiz);
