import React from 'react';
import { InputGroup } from '.';
import { Input } from './../Input';

export default {
  title: 'COMPONENTS API/Inputs',
  component: InputGroup,
};

const TemplateInputGroup = (args) => <InputGroup {...args} />;
export const DefaultInputGroup = TemplateInputGroup.bind({});
DefaultInputGroup.args = {
  typeErr: { message: 'err' },
  inputA: (
    <Input
      size="extra-large"
      grouped={true}
      placeholder={'First name'}
      typeErr={{ message: 'err' }}
      register={{ name: 'firstName' }}
    />
  ),
  inputB: (
    <Input
      size="extra-large"
      grouped={true}
      placeholder={'Last name'}
      typeErr={{ message: 'err' }}
      register={{ name: 'lastName' }}
    />
  ),
};
