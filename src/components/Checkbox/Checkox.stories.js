import React from 'react';
import { Checkbox } from './';

export default {
  title: 'COMPONENTS API/Checkbox',
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const CheckboxDefault = Template.bind({});
CheckboxDefault.args = {
  labelText: 'I don’t want to receive marketing messages from [APPNAME].',
};
