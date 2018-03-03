import React from 'react';

const Select = (props) => (
  <select value={props.selectValue} onChange={props.handleChange}>
    <option>Choose Correct Answer</option>
    {props.alternativeValues.map((value, index) => {
      return <option key={index} value={value}>{value}</option>
    })}
  </select>
);

export default Select;
