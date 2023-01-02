import { classNames } from '../../../../helpers';
import React from 'react';
import { useInputChange } from '../../../../hooks/useInputChange';

const PhoneField = ({ className, label, id, required, name, ...rest }) => {
  const { value, error, onSetValue } = useInputChange({ name, required });

  const onChange = (e) => {
    onSetValue(e.target.value);
  };

  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <input
        {...rest}
        className={classNames(className, 'input')}
        type="text"
        id={id}
        onChange={onChange}
        value={value}
        aria-describedby={`${id}Error`}
      />
      <span id={`${id}Error`} className="error">
        {error && error}
      </span>
    </div>
  );
};
export default PhoneField;
