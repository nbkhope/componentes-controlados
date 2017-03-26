import React from 'react';

import Radio from './Radio';

// <RadioList
//   name="genero"
//   options={generoOptions}
//   onChange={this.onGeneroChange}
//   checkedOption={this.state.genero}
// />

// <Radio
//   name="genero"
//   label="Masculino"
//   value="masculino"
//   checked={this.state.genero === 'masculino'}
//   onChange={this.onGeneroChange}
// />

const RadioList = (props) => {
  const radios = props.options.map(option => (
    <Radio
      key={option.id}
      name={props.name}
      label={option.label}
      value={option.value}
      checked={props.checkedOption === option.value}
      onChange={props.onChange}
    />
  ));

  return (
    <div>
      {radios}
    </div>
  );
};

export default RadioList;
