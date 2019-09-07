import React from 'react';

interface Props<FormFields> {
  Form: React.ComponentType<FormProps<FormFields>>;
  initialValues: FormFields;
}

type FormProps<FormFields> = {
  fields: FormFields;
} & Handlers<FormFields>;

interface Handlers<FormFields> {
  onChange: OnChangeHandler<FormFields>;
};

type OnChangeHandler<FormFields> = (
  e: React.SyntheticEvent,
) => void;
