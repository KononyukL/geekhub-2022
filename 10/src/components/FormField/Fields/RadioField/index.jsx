import { classNames } from '../../../../helpers';
import React, { useEffect } from 'react';
import { useInputChange } from '../../../../hooks/useInputChange';
import './style.css';

const RadioField = ({ className, label, id, options, defaultChecked, name, ...rest }) => {
  const { value, onSetValue } = useInputChange({ name });
  const checkedValue = value || defaultChecked;

  useEffect(() => {
    if (!value && defaultChecked) {
      onSetValue(defaultChecked);
    }
  }, [defaultChecked, value]);

  const onChange = (e) => {
    onSetValue(e.target.value);
  };

  return (
    <div className="radio-container">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      {options.map((el, i) => (
        <div key={i}>
          <input
            {...rest}
            className={classNames(className, 'radio')}
            type="radio"
            id={i + id}
            value={el.value}
            checked={el.value === checkedValue}
            onChange={onChange}
          />
          <label htmlFor={i + id}>{el.label}</label>
        </div>
      ))}
    </div>
  );
};

export default RadioField;
