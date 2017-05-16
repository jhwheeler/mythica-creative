import React, { Component } from 'react';
import { Field, Form, reduxForm } from 'redux-form';
const { DOM: { input } } = React;

import Hero from '../Hero/Hero';

import css from './Question.css';

const Question = props => {
  const { handleSubmit } = props;
  return (
    <div className="question">
      <Hero backgroundImage={props.backgroundImage}>
        <Form onSubmit={handleSubmit}>
          <div>
            <label>{props.label}</label>
            <Field name={props.name} component={props.component}/>
          </div>
          <div>
            <button type="submit" className="next">{props.buttonText}</button>
          </div>
        </Form>
      </Hero>
    </div>
  )
}

export default reduxForm({
  form: 'brandQuiz',
  destroyOnUnmount: false,
})(Question);
