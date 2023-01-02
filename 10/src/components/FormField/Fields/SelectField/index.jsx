import { classNames } from '../../../../helpers';
import React from 'react';
import { useInputChange } from '../../../../hooks/useInputChange';

const SelectField = ({ className, label, id, options, required, name, ...rest }) => {
  const { value, error, onSetValue } = useInputChange({ name, required });

  const onChange = (e) => {
    onSetValue(e.target.value);
  };

  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <select
        {...rest}
        className={classNames(className, 'input')}
        id={id}
        value={value}
        onChange={onChange}
        defaultValue={''}
        aria-describedby={`${id}Error`}>
        <option value="" disabled hidden>
          Select an Option
        </option>
        {options.map((el, i) => (
          <option key={i} value={el.value}>
            {el.label}
          </option>
        ))}
      </select>

      <span id={`${id}Error`} className="error">
        {error && error}
      </span>
    </div>
  );
};
export default SelectField;
