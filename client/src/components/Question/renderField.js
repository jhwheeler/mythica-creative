import React from 'react';

const renderField = ({input, label, type, placeholder}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={placeholder} type={type} />
    </div>
  </div>
)

export default renderField;
