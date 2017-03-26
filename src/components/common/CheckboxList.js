import React from 'react';

import { Checkbox } from './Checkbox';
// <CheckboxList
//   name="frutas[]"
//   options={frutaOptions}
//   onChange={this.onFrutasChange}
// />

// {
//   id: 1,
//   label: 'Banana',
//   value: 'banana'
// },

const CheckboxList = (props) => {
  const checkboxes = props.options.map(option => {
    return (
      <Checkbox
        key={option.id}
        name={props.name}
        label={option.label}
        value={option.value}
        onChange={props.onChange}
        checked={props.checkedOptions[option.value]}
      />
    );
  });

  return (
    <div>
      <span style={{ textDecoration: 'underline' }}>
        {props.label}
      </span>
      <br />
      {checkboxes}
    </div>
  );
};

export { CheckboxList };
