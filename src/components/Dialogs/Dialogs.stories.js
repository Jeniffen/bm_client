import React from 'react';
import { DialogHeader } from './DialogHeader';
import { DialogFooter } from './DialogFooter';
import { DialogSignIn } from './DialogSignIn';
import { DialogMailSignUp } from './DialogMailSignUp';

export default {
  title: 'COMPONENTS API/Dialogs',
  parameters: {
    backgrounds: {
      default: 'modal',
      values: [{ name: 'modal', value: '#C6C6C6' }],
    },
  },
};

const TemplateHeader = (args) => <DialogHeader {...args} />;

export const HeaderDefault = TemplateHeader.bind({});
HeaderDefault.args = {
  headerTitle: 'Header Title',
};

const TemplateFooter = (args) => <DialogFooter {...args} />;

export const FooterDefault = TemplateFooter.bind({});
FooterDefault.args = {
  footerText: 'Example footer text',
  anchorText: 'anchor text',
};

const TemplateSignIn = (args) => <DialogSignIn {...args} />;

export const SignIn = TemplateSignIn.bind({});
SignIn.args = {
  headerTitle: 'Log in',
  footerText: 'Don’t have an account?',
  anchorText: 'Sign up',
};

const TemplateMailSignUp = (args) => <DialogMailSignUp {...args} />;

export const MailSignUp = TemplateMailSignUp.bind({});
MailSignUp.args = {
  headerTitle: 'Finish signing up',
  footerText: 'Don’t have an account?',
  anchorText: 'Sign up',
};
