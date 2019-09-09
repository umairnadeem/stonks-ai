import React from 'react';

export interface FormFields {
  [key: string]: string | number;
}

export type ReactChangeEvent = React.ChangeEvent<HTMLInputElement>;

export type ReactMouseEvent = React.MouseEvent;

export type onChangeHandler = (e: ReactChangeEvent) => void;

export type submitCallback = (values: FormFields) => void;

export type onSubmitHandler = (
  e: ReactMouseEvent,
  callback?: submitCallback,
) => void;
