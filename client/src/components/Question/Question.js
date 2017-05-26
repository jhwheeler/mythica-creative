import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import css from './Question.css';

const Question = props => {
  const { handleSubmit, question } = props;

  const renderCheckboxes = () => {
    return (
      <div className="checkboxes">
        {question.options.map((option, index) => (
          <div className="checkbox" key={index}>
            <label htmlFor={`checkbox-${index}`}>{option}</label>
            <input type="checkbox" id={`checkbox-${index}`} />
          </div>
          )
        )}
      </div>
    )
  }

  return (
    <div className="question">
      <form onSubmit={handleSubmit}>
        <label>{question.text}</label>
        {question.type === "checkbox" && renderCheckboxes()}
        {question.type !== "checkbox" &&
          <Field
            component={question.component}
            type={question.type}
            name={question.name}
            placeholder={question.placeholder}
            onBlur={props.onBlur}
          />
        }
      </form>
    </div>
  )
}

Question.PropTypes = {
  question: PropTypes.object,
  onBlur: PropTypes.func,
  backButtonText: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
}

export default reduxForm({
  form: 'quiz',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(Question);
