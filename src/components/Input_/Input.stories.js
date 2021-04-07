import React from 'react';
import { Input_ } from './';

export default {
  title: 'COMPONENTS API/Input_',
  component: Input_,
};

const Template = (args) => <Input_ {...args} />;

export const Input = Template.bind({});
Input.args = {
  size: 'extra-large',
  typeErr: { message: 'err' },
  placeholder: 'phone number',
  labelText:
    'To sign up, you need to be at least 18. Your birthday won’t be shared with other people who use [APPNAME].',
  register: { name: 'Example' },
};
