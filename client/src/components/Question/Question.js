import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from './renderField';

import Hero from '../Hero/Hero';

import css from './Question.css';

const Question = props => {
  const { handleSubmit } = props;
  return (
    <div className="question">
      <Hero backgroundImage={props.backgroundImage}>
        <form onSubmit={handleSubmit}>
          <Field
            name={props.name}
            component={renderField}
            label={props.label}
            type="text"
          />
          <div>
            <button type="submit" className="next">{props.buttonText}</button>
          </div>
        </form>
      </Hero>
    </div>
  )
}

export default reduxForm({
  form: 'brandQuiz',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(Question);
