import React from 'react';

const Alternative = (props) => (
  <input
    value={props.value}
    onChange={(e) => props.onChange(e, props.index)}
    placeholder="Alternative"
  />
);

export default Alternative;
