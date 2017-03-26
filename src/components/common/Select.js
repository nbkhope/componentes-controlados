import React from 'react';

// <Select
//   name="pais"
//   value={this.state.pais}
//   onChange={this.onPaisChange}
//   options={paisOptions}
// />

const Select = ({ name, value, onChange, options }) => {
  const optionChoices = options.map(option => (
    <option key={option.id} value={option.value}>
     {option.label}
    </option>
  ));

  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
    >
      {optionChoices}
    </select>
  );
};

export { Select };
