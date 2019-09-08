import React from 'react';
import R from 'ramda';

interface Props<FormFields> {
  FormComponent: React.ComponentType<FormProps<FormFields>>;
  initialValues: FormFields;
}

type FormProps<FormFields> = {
  fields: FormFields;
} & Handlers<FormFields>;

interface Handlers<FormFields> {
  onChange: OnChangeHandler<FormFields>;
};

type OnChangeHandler<FormFields> = <K extends keyof FormFields>(
  event: React.ChangeEvent<HTMLInputElement>,
  a?: FormFields[K],
) => void;

interface State<FormFields> {
  fields: FormFields;
}

class Form<FormFields> extends React.Component<
  Props<FormFields>,
  State<FormFields>
> {
  constructor(props: Props<FormFields>) {
    super(props);
    this.state = { fields: props.initialValues };
  }

  public onChange: OnChangeHandler<FormFields> = (event) => {
    const { target: { name, value }} = event;
    this.setState({ fields: R.merge(this.state.fields, { [name]: value }) });
  }

  public render() {
    const { FormComponent } = this.props;
    const { fields } = this.state;
    return (
      <FormComponent onChange={this.onChange} fields={fields} />
    );
  }
}

export default Form;
