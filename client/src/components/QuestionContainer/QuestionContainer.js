import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Hero from '../Hero/Hero';
import Question from '../Question/Question';

import css from './QuestionContainer.css';

export default class QuestionContainer extends Component {
  constructor() {
    super(props);
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

  render() {
    return (
      <div className="question-container">
        <Hero backgroundImage={props.backgroundImage}>
          <div className="question-wrapper">
            { props.type === "input" &&
                <Question
                  component="input"
                  id={props.id}
                  label={props.label}
                  placeholder={props.placeholder}
                  name={props.name}
                  buttonText={this.setButtonText(props)}
                  backButtonText={this.setButtonText(props)}
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
