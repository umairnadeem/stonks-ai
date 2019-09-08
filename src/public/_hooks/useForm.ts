import React, { useState } from 'react';

/* Types */
interface FormFields {
  [key: string]: string;
}

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

type MouseEvent = React.MouseEvent;

type onChangeHandler = (e: ChangeEvent) => void;

type submitCallback = (values: FormFields) => void;

type onSubmitHandler = (
  e: MouseEvent,
  callback?: submitCallback,
) => void;

/**
 * A custom hook which holds the state and handleChange/handleSubmit functions for form components
 * @param {FormFields} initialValues - Initial state for form fields
 */
export const useForm = (initialValues: FormFields): [
  FormFields,
  onChangeHandler,
  onSubmitHandler,
] => {
  const [values, setValues] = useState<FormFields>(initialValues);

  const handleChange = (e: ChangeEvent) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: MouseEvent, callback: submitCallback) => {
    e.preventDefault();
    callback(values);
  };

  return [values, handleChange, handleSubmit];
};

