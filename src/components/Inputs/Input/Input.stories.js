import React from 'react';
import { Input } from '.';

export default {
  title: 'COMPONENTS API/Inputs',
  component: Input,
};

const Template = (args) => <Input {...args} />;
export const InputField = Template.bind({});
InputField.args = {
  size: 'extra-large',
  typeErr: { message: 'err' },
  placeholder: 'phone number',
  labelText:
    'To sign up, you need to be at least 18. Your birthday won’t be shared with other people who use [APPNAME].',
  register: { name: 'Example' },
};
