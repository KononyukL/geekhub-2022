import React from 'react';

const Select = ({ value, onChange, options, label, ...rest }) => {
  const handleChange = (e) => {
    onChange?.(e.target.value);
  };
  return (
    <label>
      {label}
      <br />
      <select {...rest} value={value} onChange={handleChange}>
        {options.map((el, i) => (
          <option key={i} value={el.value}>
            {el.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
