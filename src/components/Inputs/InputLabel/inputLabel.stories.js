import React from 'react';
import { InputLabel } from '.';

export default {
  title: 'COMPONENTS API/Inputs/InputLabel',
};

const TemplateInputLabel = (args) => <InputLabel {...args} />;
export const DefaultInputLabel = TemplateInputLabel.bind({});
DefaultInputLabel.args = {
  typeErr: { message: 'This is an error message' },
  labelText: 'This is a regular label text',
};
