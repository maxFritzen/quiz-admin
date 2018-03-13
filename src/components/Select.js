import React from 'react';

const Select = (props) => (
  <select
    className={`form-select ${props.error ? 'error' : ''}`}
    value={props.correctAlternative === '' ? 'no-value' : props.correctAlternative}
    onChange={props.handleChange}
    >
    <option value='no-value'>Choose Correct Answer</option>
    {props.alternatives.map((value, index) => {
      if (value === '') {
        return;
      }
      return <option key={index} value={value}>{value}</option>
    })}
  </select>
);

export default Select;
