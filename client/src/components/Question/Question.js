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
          label={question.text}
          placeholder={question.placeholder}
          onBlur={props.onBlur}
        />
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
