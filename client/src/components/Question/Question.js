import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import css from './Question.css';

const Question = props => {
  const { handleSubmit } = props;
  const { question } = props;
  return (
    <div className="question">
      <form onSubmit={handleSubmit}>
        <Field
          component={question.component}
          type={question.type}
          name={question.name}
          label={question.label}
          placeholder={question.placeholder}
          onBlur={props.onBlur}
        />
        {props.backButtonText &&
          <div className="quiz-button">
            <button
              type="button"
              onClick={question.lastQuestion}
              className="question-back">
              {props.backButtonText}
            </button>
          </div>
        }
        {props.buttonText &&
          <div className="quiz-button">
            <button
              type="submit"
              className="question-submit">
              {props.buttonText}
            </button>
          </div>
        }
      </form>
    </div>
  )
}

Question.PropTypes = {
  question: PropTypes.object.isRequired,
  onBlur: PropTypes.func,
  backButtonText: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
}

export default reduxForm({
  form: 'quiz',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(Question);
