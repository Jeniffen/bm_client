import React from 'react';
import { FormPhoneAuth } from './FormPhoneAuth';
import { FormMailSignUp } from './FormMailSignUp';

export default {
  title: 'COMPONENTS API/Forms',
};

const Template = (args) => <FormPhoneAuth {...args} />;

export const DropdownInput = Template.bind({});
DropdownInput.args = {
  size: 'extra-large',
  dropdownType: 'Country/Region',
  inputPlaceholder: 'Phone number',
};

const TemplateMailSignup = (args) => <FormMailSignUp {...args} />;

export const MailSignUp = TemplateMailSignup.bind({});
MailSignUp.args = {
  size: 'extra-large',
  dropdownType: 'Country/Region',
  inputPlaceholder: 'Phone number',
};
