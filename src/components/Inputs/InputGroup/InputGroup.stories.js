import React from 'react';
import { InputGroup } from '.';
import { Input } from './../Input';

export default {
  title: 'COMPONENTS API/Inputs/InputGroup',
};

const TemplateInputGroup = (args) => <InputGroup {...args} />;
export const DefaultInputGroup = TemplateInputGroup.bind({});
DefaultInputGroup.args = {
  labelText: 'Make sure it matches the name on your government ID.',
  typeErr: { message: 'This is the error message of input A' } || {
    message: 'This is the error message of input B',
  },
  inputA: (
    <Input
      size="extra-large"
      grouped={true}
      placeholder={'First name'}
      typeErr={{ message: 'This is the error message of input A' }}
      register={{ name: 'firstName' }}
    />
  ),
  inputB: (
    <Input
      size="extra-large"
      grouped={true}
      placeholder={'Last name'}
      typeErr={{ message: 'This is the error message of input B' }}
      register={{ name: 'lastName' }}
    />
  ),
};
