import React from 'react';

const InputText = (props) => {
  const styles = {
    fontWeight: 'bold'
  };
  
  return (
    <div>
      <label style={styles}>{props.label}</label>{' '}
      <input
        type="text"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default InputText;
