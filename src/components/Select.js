import React from 'react';

const Select = (props) => (
  <select
    value={props.selectValue === '' ? 'no-value' : props.selectValue}
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
