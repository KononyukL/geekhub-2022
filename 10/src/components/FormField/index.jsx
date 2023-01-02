import React, { useId } from 'react';
import NameField from './Fields/NameField';
import Input from './Fields/Input';
import ConfirmPasswordField from './Fields/ConfirmPasswordField';
import PasswordField from './Fields/PasswordField';
import './style.css';
import EmailField from './Fields/EmailField';
import PhoneField from './Fields/PhoneField';
import CheckboxesField from './Fields/CheckboxesField';
import RadioField from './Fields/RadioField';
import SelectField from './Fields/SelectField';
import CheckboxField from './Fields/CheckboxField';

const FormField = ({ label, type = 'text', name = '', id: propsId, ...rest }) => {
  const innerId = useId();
  const id = propsId || `FormField${innerId}`;

  const componentVariants = {
    name: NameField,
    confirmPassword: ConfirmPasswordField,
    password: PasswordField,
    email: EmailField,
    phone: PhoneField,
    checkboxes: CheckboxesField,
    checkbox: CheckboxField,
    radio: RadioField,
    select: SelectField
  };

  const Component = componentVariants[type] || Input;

  return <Component {...rest} name={name} label={label} id={id} type={type} />;
};

export default FormField;
