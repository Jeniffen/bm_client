import React from 'react';
import { Button } from '.';
import { Icons } from '../Icons';

export default {
  title: 'COMPONENTS/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'The default `buttonType` of the `Button` component is the `primary`.',
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  buttonType: 'primary',
  label: 'Primary button',
  size: 'extra-large',
};

export const SecondaryIcon = Template.bind({});
SecondaryIcon.args = {
  buttonType: 'secondary',
  size: 'extra-large',
  label: 'secondary with icon',
  prefixIcon: <Icons type="logo-google" size="small" />,
};

export const DarkDefault = Template.bind({});
DarkDefault.args = {
  buttonType: 'dark',
  size: 'small',
  label: 'dark themed',
};

export const LightDefault = Template.bind({});
LightDefault.parameters = {
  backgrounds: {
    default: 'dark',
    values: [{ name: 'dark', value: '#333333' }],
  },
};
LightDefault.args = {
  buttonType: 'light',
  size: 'small',
  label: 'light themed',
};
