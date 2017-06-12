import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import css from './Question.scss';

const Question = props => {
  const { handleSubmit, question } = props;

  const renderCheckboxes = () => {
    return (
      <div className="checkboxes">
        <label className={`question-label-${question.name}`}>{question.text}</label>
        <div className="checkbox-wrapper">
          {question.options.map((option, index) => (
            <div className="checkbox" key={index}>
              <Field
                component="input"
                type="checkbox"
                name={option}
                id={option}
              />
              <label htmlFor={option}>
                <img className={`question-image question-image-${question.name}`} src={`/images/quiz/${question.name}-${question.options[index]}.png`} />
              </label>
            </div>
          )
          )}
        </div>
      </div>
    )
  }

  const required = value => (value == null ? 'Required' : undefined);

  const email = value => {
    (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
      ? 'Invalid email'
      : undefined);
  }

  return (
    <div className={`question question-${question.name}`}>
      <form onSubmit={handleSubmit}>
        {question.image === "yes" && question.type !== "checkbox" &&
          <img className="question-image" src={`/images/quiz/${question.name}.png`} />
        }
        {question.type === "checkbox" && renderCheckboxes()}
        {question.type !== "checkbox" &&
          <div className="question-wrapper">
            <label className={`question-label-${question.name}`}>{question.text}</label>
            <Field
              component={question.component}
              type={question.type}
              name={question.name}
              placeholder={question.placeholder}
              onBlur={props.onBlur}
              validate={required}
            />
          </div>
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
