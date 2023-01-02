import React, { createContext, useImperativeHandle, useRef, useState, forwardRef } from 'react';

export const FormContext = createContext({});

const Form = forwardRef(({ children, onSubmit, ...rest }, ref) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const formRef = useRef();
  const submitRef = useRef();
  useImperativeHandle(ref, () => ({
    submit: () => {
      submitRef.current.click();
    }
  }));

  const onSetValues = (name, value) => {
    setValues((val) => ({ ...val, [name]: value }));
  };

  const onSetErrors = (name, error) => {
    if (error) {
      setErrors((err) => ({ ...err, [name]: error }));
    } else {
      setErrors((err) => {
        const newErr = { ...err };
        delete newErr[name];

        return newErr;
      });
    }
  };

  const onClearField = (name) => {
    setValues((val) => {
      const newVal = { ...val };
      delete newVal[name];

      return newVal;
    });
    setErrors((err) => {
      const newErr = { ...err };
      delete newErr[name];

      return newErr;
    });
  };

  const formContextValues = {
    isSubmitting,
    values,
    errors,
    onSetValues,
    onSetErrors,
    onClearField
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    await setIsSubmitting(true);

    try {
      if (onSubmit && !Object.keys(errors).length) {
        await onSubmit(values);
        event.target.reset();
        setValues({});
      }
    } catch (e) {
      console.error(e);
      alert('Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContext.Provider value={formContextValues}>
      <form {...rest} ref={formRef} onSubmit={onFormSubmit}>
        {children}
        <input ref={submitRef} type="submit" hidden />
      </form>
    </FormContext.Provider>
  );
});

Form.displayName = 'Form';

export default Form;
