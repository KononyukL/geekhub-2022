import { useCallback, useContext, useEffect, useState } from 'react';
import { FormContext } from '../components/Form';
import { validation } from '../helpers';

export const useInputChange = ({ name, required }) => {
  const [showError, setShowError] = useState(false);
  const { values, errors, onSetValues, onSetErrors, isSubmitting, onClearField } =
    useContext(FormContext);

  const onSetValue = useCallback(
    (value) => {
      if ((required && !value) || (required && typeof value === 'object' && !value.length)) {
        onSetErrors(name, 'This field is required');
        setShowError(true);
      } else {
        onSetErrors(name, '');
      }

      onSetValues(name, value);

      if (showError) {
        setShowError(false);
      }
    },
    [required, name, showError]
  );

  useEffect(() => {
    if (isSubmitting) {
      setShowError(true);
    }
  }, [isSubmitting]);

  useEffect(() => {
    if (values[name]) {
      onSetErrors(name, validation(name, values[name]));
    }
  }, [values[name]]);

  useEffect(() => {
    if (required) {
      onSetErrors(name, 'This field is required');
    }

    return () => {
      onClearField(name);
      setShowError(false);
    };
  }, []);

  return {
    onSetValue,
    value: values[name],
    error: showError ? errors[name] : ''
  };
};
