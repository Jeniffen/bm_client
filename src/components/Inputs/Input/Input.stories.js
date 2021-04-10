import React from 'react';
import { Input } from '.';

export default {
  title: 'COMPONENTS API/Inputs/Input',
};

const Template = (args) => <Input {...args} />;
export const InputField = Template.bind({});
InputField.args = {
  size: 'extra-large',
  typeErr: { message: 'This is an invalid phone number.' },
  placeholder: 'phone number',
  labelText:
    'To sign up, you need to be at least 18. Your birthday won’t be shared with other people who use [APPNAME].',
  register: { name: 'Example' },
};
