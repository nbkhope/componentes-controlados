import React from 'react';

const Checkbox = (props) => {
  return (
    <div>
      <label style={{ fontWeight: 'bold', color: 'blue' }}>
        <input
          type="checkbox"
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          checked={props.checked}
        />
        {props.label}
      </label>
    </div>
  );
};

export { Checkbox };
