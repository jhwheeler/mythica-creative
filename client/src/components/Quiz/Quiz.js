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
      question: 1
    }

    this.nextPage = this.nextPage.bind(this);
    this.lastPage = this.lastPage.bind(this);
  }

  nextPage() {
    this.setState({question: this.state.question + 1});
  }

  lastPage() {
    this.setState({question: this.state.question - 1});
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
