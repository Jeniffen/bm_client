import React from 'react';
import { InputLabel } from '.';

export default {
  title: 'COMPONENTS API/Inputs',
  component: InputLabel,
};

const TemplateInputLabel = (args) => <InputLabel {...args} />;
export const DefaultInputLabel = TemplateInputLabel.bind({});
