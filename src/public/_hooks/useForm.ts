import { useState } from 'react';
import {
  FormFields,
  onChangeHandler,
  onSubmitHandler,
  ReactChangeEvent,
  ReactMouseEvent,
  submitCallback,
} from '../_types';

/**
 * A custom hook which holds the state and handleChange/handleSubmit functions for form components
 * @param {FormFields} initialValues - Initial state for form fields
 */
export const useForm = (
  initialValues: FormFields,
): [FormFields, onChangeHandler, onSubmitHandler] => {
  const [values, setValues] = useState<FormFields>(initialValues);

  const handleChange = (e: ReactChangeEvent) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: ReactMouseEvent, callback: submitCallback) => {
    e.preventDefault();
    callback(values);
  };

  return [values, handleChange, handleSubmit];
};
