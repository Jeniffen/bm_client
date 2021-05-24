import React from 'react';
import { Heading } from './';

export default {
  title: 'COMPONENTS API/Heading',
};

const Template = (args) => <Heading {...args} />;
export const FluidHeader = Template.bind({});
FluidHeader.args = {
  mainTitle: 'This is an example fluid header',
  textColor: '#000',
  mainTextWeight: 700,
};
