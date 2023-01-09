import React from 'react';

const Input = ({ value, onChange, label, ...rest }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <label>
      {label}
      <br />
      <input {...rest} value={value} onChange={handleChange} />
    </label>
  );
};

export default Input;
