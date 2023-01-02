import { classNames } from '../../../../helpers';
import React from 'react';
import { useInputChange } from '../../../../hooks/useInputChange';
import './style.css';

const CheckboxField = ({ className, label, id, name, required, ...rest }) => {
  const { value, error, onSetValue } = useInputChange({ name, required });

  const onChange = (e) => {
    onSetValue(e.target.checked);
  };

  return (
    <div className="checkbox-container">
      <input
        {...rest}
        className={classNames(className, 'checkbox')}
        type="checkbox"
        id={id}
        onChange={onChange}
        checked={value}
        aria-describedby={`${id}Error`}
      />
      <label htmlFor={id}>{label}</label>
      <span id={`${id}Error`} className="error">
        {error && error}
      </span>
    </div>
  );
};
export default CheckboxField;
