import React from 'react';
import { DialogHeader } from './DialogHeader';
import { DialogContainer } from './DialogContainer';
import { DialogOAuth } from './DialogViews/DialogOAuth';
import { DialogMailAuth } from './DialogViews/DialogMailAuth';

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

const TemplateDialogWrapper = (args) => <DialogContainer {...args} />;
export const ContainerDefault = TemplateDialogWrapper.bind({});
ContainerDefault.args = {
  headerTitle: 'Container Header',
};

const TemplateOAuth = (args) => <DialogOAuth {...args} />;
export const DefaultAuth = TemplateOAuth.bind({});

const TemplateMailSignUp = (args) => <DialogMailAuth {...args} />;
export const DefaultMailSignUp = TemplateMailSignUp.bind({});
DefaultMailSignUp.args = {
  headerTitle: 'Finish signing up',
};
