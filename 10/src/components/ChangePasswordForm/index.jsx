import React from 'react';
import Form from '../Form';
import FormField from '../FormField';
import Button from '../Button';
import './style.css';

const ChangePasswordForm = () => {
  const getFormValues = (values) => {
    const newValues = { ...values };
    delete newValues.confirmPassword;

    console.log(newValues);
  };

  return (
    <div className="form-container">
      <Form onSubmit={getFormValues}>
        <FormField required name="password" label="Password" type="password" />
        <FormField
          required
          name="confirmPassword"
          label="Confirm password"
          type="confirmPassword"
        />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default ChangePasswordForm;
