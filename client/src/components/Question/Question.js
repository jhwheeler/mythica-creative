import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import css from './Question.css';

const Question = props => {
  const { handleSubmit } = props;
  return (
    <div className="question">
      <form onSubmit={handleSubmit}>
        <Field
          name={props.name}
          component={props.component}
          label={props.label}
          placeholder={props.placeholder}
          type="text"
        />
        {props.backButtonText &&
          <div className="quiz-button">
            <button
              type="button"
              onClick={props.lastQuestion}
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
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  backButtonText: PropTypes.string,
  buttonText: PropTypes.string,
}

export default reduxForm({
  form: 'quiz',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(Question);
