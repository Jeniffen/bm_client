import React from 'react';
import { PasswordValidator } from '.';

export default {
  title: 'COMPONENTS API/Inputs/PasswordValidator',
};

const TemplatePasswordValidator = (args) => <PasswordValidator {...args} />;
export const DefaultPasswordValidator = TemplatePasswordValidator.bind({});
DefaultPasswordValidator.args = {
  value: 'Th!s_is_a_Passw@rd',
  showValidPassowrd: true,
};
