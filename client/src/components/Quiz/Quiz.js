import React, { Component } from 'react';
import { connect } from 'react-redux';

import QuestionContainer from '../QuestionContainer/QuestionContainer';

import css from './Quiz.css';
import data from '../../data/questions.json';
import welcomeHero from '../../../public/images/hero/welcome-hero.jpg';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    }

    this.nextPage = this.nextPage.bind(this);
    this.lastPage = this.lastPage.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.setButtonText = this.setButtonText.bind(this);
  }

  nextPage() {
    this.setState({page: this.state.page + 1});
  }

  lastPage() {
    this.setState({page: this.state.page - 1});
  }

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

  setButtonText(question) {
    if (question.id === 1) {
      props.buttonText = "Start";
      props.backButtonText = null;
    }
    else if (question.id >= data.questions.length) {
      props.buttonText = "Done";
      props.backButtonText = "Back";
    } else {
      props.buttonText = "Next";
      props.backButtonText = "Back";
    }
  }

  render() {
    return (
      <div className="quiz">
        {data.questions.map((question, index) =>
          <QuestionContainer
            question={question}
            backgroundImage={welcomeHero}
            key={index}
          />
        )}
        {this.renderButton(this.props)}
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
