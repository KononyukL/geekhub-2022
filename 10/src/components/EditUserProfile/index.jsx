import React, { useRef, useState } from 'react';
import Form from '../Form';
import FormField from '../FormField';
import Button from '../Button';
import './style.css';

const EditUserProfile = () => {
  const [isGroupAccount, setIsGroupAccount] = useState(false);

  const getFormValues = (values) => {
    console.log(values);
  };

  const formRef = useRef();

  return (
    <div className="form-container">
      <label className="group-account">
        <input type="checkbox" onChange={(e) => setIsGroupAccount(e.target.checked)} />
        Group Account
      </label>
      <Form ref={formRef} onSubmit={getFormValues}>
        {isGroupAccount ? (
          <FormField required type="text" name="title" label="Title" />
        ) : (
          <>
            <FormField
              required
              type="name"
              name="firstName"
              label="First Name"
              placeholder="John"
            />
            <FormField required type="name" name="lastName" label="Last Name" placeholder="Smite" />
          </>
        )}
        <FormField required type="email" name="email" label="Email" placeholder="Type here..." />
        <FormField required type="phone" name="phone" label="Phone" placeholder="Type here..." />
        <FormField
          required
          type="select"
          name="gender"
          label="Gender"
          options={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
            { value: 'other', label: 'Unspecified or Nonbinary' }
          ]}
        />
        <FormField
          required
          type="radio"
          name="prefer"
          label="What do you prefer?"
          defaultChecked="cola"
          options={[
            { value: 'pepsi', label: 'Pepsi' },
            { value: 'cola', label: 'Cola' }
          ]}
        />
        <FormField
          required
          name="race"
          type="checkboxes"
          options={[
            { value: 'unspecified', label: 'Not Reported' },
            { value: 'preferUnspecified', label: 'Prefer not to answer' },
            {
              value: 'AMERICAN_INDIAN_OR_ALASKA_NATIVE',
              label: 'American Indian or Alaska Native'
            },
            { value: 'ASIAN', label: 'Asian' },
            { value: 'BLACK_OR_AFRICAN_AMERICAN', label: 'Black or African American' },
            {
              value: 'NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER',
              label: 'Native Hawaiian or Other Pacific Islander'
            },
            { value: 'WHITE', label: 'White' }
          ]}
        />
        <FormField
          required
          name="consent"
          type="checkbox"
          label={
            <>
              By checking this box, I agree to the <a href="#">Terms of Use</a> and{' '}
              <a href="#">Privacy Policy</a>.
            </>
          }
        />
      </Form>

      <Button
        onClick={() => {
          formRef.current.submit();
        }}>
        Submit Form
      </Button>
    </div>
  );
};

export default EditUserProfile;
