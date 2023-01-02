import { classNames } from '../../../../helpers';
import React from 'react';
import { useInputChange } from '../../../../hooks/useInputChange';

const EmailField = ({ className, label, id, required, name, ...rest }) => {
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
        value={value}
        onChange={onChange}
        aria-describedby={`${id}Error`}
      />
      <span id={`${id}Error`} className="error">
        {error && error}
      </span>
    </div>
  );
};

export default EmailField;
