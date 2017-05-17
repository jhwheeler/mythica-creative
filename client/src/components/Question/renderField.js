import React from 'react';

const renderField = ({input, label, type}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
    </div>
  </div>
)

export default renderField;
