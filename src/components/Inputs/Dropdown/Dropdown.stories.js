import React from 'react';
import { Dropdown } from '.';

export default {
  title: 'COMPONENTS API/Inputs/Dropdown',
};

const TemplateDropdown = (args) => <Dropdown {...args} />;
export const DefaultDropdown = TemplateDropdown.bind({});
DefaultDropdown.args = { labelText: 'Country/Region' };
