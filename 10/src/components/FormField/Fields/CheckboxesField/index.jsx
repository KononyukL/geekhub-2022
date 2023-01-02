import { classNames } from '../../../../helpers';
import React from 'react';
import './style.css';
import { useInputChange } from '../../../../hooks/useInputChange';

const CheckboxesField = ({ className, options, name, id, required, ...rest }) => {
  const { value, error, onSetValue } = useInputChange({ name, required });

  const onChange = (e) => {
    if (!value) {
      onSetValue([e.target.value]);
    } else {
      const used = value.includes(e.target.value);
      if (used) {
        onSetValue(value.filter((el) => el !== e.target.value));
      } else {
        onSetValue([...value, e.target.value]);
      }
    }
  };

  return (
    <div role="group" className="checkboxes" aria-describedby={`${id}Error`}>
      {options.map((el, i) => (
        <div key={i}>
          <input
            {...rest}
            className={classNames(className, 'checkbox')}
            type="checkbox"
            id={i + id}
            value={el.value}
            onChange={onChange}
          />
          <label htmlFor={i + id}>{el.label}</label>
        </div>
      ))}
      <span id={`${id}Error`} className="error">
        {error}
      </span>
    </div>
  );
};
export default CheckboxesField;
