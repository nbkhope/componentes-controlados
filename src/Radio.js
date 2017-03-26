import React from 'react';

const Radio = (props) => {
  const { name, value, checked, onChange, label } = props;
  return (
    <div>
      <label style={{ color: 'red' }}>
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        {label}
      </label>
    </div>
  );
};

export default Radio;
