import React from 'react';
import { classNames } from '../../helpers';
import './style.css';

const Button = ({ children, className, ...rest }) => {
  return (
    <button {...rest} className={classNames(className, 'button')}>
      {children}
    </button>
  );
};

export default Button;
