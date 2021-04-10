import React from 'react';
import { FormOAuth } from './FormOAuth';
import { FormPhoneAuth } from './FormPhoneAuth';
import { FormMailSignUp } from './FormMailSignUp';
import { FormMailLogin } from './FormMailLogin';
import { FormPhoneVerify } from './FormPhoneVerify';

export default {
  title: 'COMPONENTS API/Forms',
};

const TemplateOAuth = (args) => <FormOAuth {...args} />;
export const DefaultAuth = TemplateOAuth.bind({});
DefaultAuth.args = {
  size: 'extra-large',
  dropdownType: 'Country/Region',
  inputPlaceholder: 'Phone number',
  footerText: 'Don’t have an account?',
  anchorText: 'Sign up',
};

const Template = (args) => <FormPhoneAuth {...args} />;
export const PhoneAuth = Template.bind({});
PhoneAuth.args = {
  size: 'extra-large',
  dropdownType: 'Country/Region',
  inputPlaceholder: 'Phone number',
};

const TemplateMailSignup = (args) => <FormMailSignUp {...args} />;
export const MailSignup = TemplateMailSignup.bind({});
MailSignup.args = {
  size: 'extra-large',
};

const TemplateMailLogin = (args) => <FormMailLogin {...args} />;
export const MailLogin = TemplateMailLogin.bind({});
MailLogin.args = {
  size: 'extra-large',
  footerText: 'Don’t have an account?',
  anchorText: 'Sign up',
};

const TemplatePhoneVerify = (args) => <FormPhoneVerify {...args} />;
export const PhoneVerification = TemplatePhoneVerify.bind({});
