import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
const { DOM: { input } } = React;

const Question = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>{props.label}</label>
        <Field name={props.name} component={props.component}/>
      </div>
      <div>
        <button type="submit" className="next">{props.buttonText}</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'brandQuiz',
  destroyOnUnmount: false,
})(Question);
