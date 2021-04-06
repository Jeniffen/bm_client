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
  border: true,
  placeholder: 'phone number',
  register: { name: 'Example' },
};
