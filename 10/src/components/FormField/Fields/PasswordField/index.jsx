import React, { useState } from 'react';
import { classNames } from '../../../../helpers';
import { ReactComponent as Eye } from '../../../../assets/icons/eye.svg';
import { ReactComponent as EyeOff } from '../../../../assets/icons/eye-off.svg';
import { useInputChange } from '../../../../hooks/useInputChange';

const PasswordField = ({ className, label, id, required, name, ...rest }) => {
  const [show, setShow] = useState(false);
  const { value, error, onSetValue } = useInputChange({ name, required });

  const onChange = (e) => {
    onSetValue(e.target.value);
  };

  const onShow = () => {
    setShow(!show);
  };

  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <span className="password-input-container">
        <input
          onChange={onChange}
          className={classNames(className, 'input')}
          value={value}
          {...rest}
          type={show ? 'text' : 'password'}
          aria-describedby={`${id}Error`}
        />
        <button
          type="button"
          onClick={onShow}
          aria-label="Toggle show password"
          className="password-toggle">
          {show ? <Eye /> : <EyeOff />}
        </button>
      </span>
      <span id={`${id}Error`} className="error">
        {error && error}
      </span>
    </div>
  );
};

export default PasswordField;
