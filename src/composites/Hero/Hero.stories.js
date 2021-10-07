import React from 'react';
import { Hero } from '.';

export default {
  title: 'COMPOSITES/Hero',
  component: Hero,
  parameters: {
    docs: {
      description: {
        component:
          'The Hero component is the most prominent element of the landing page.',
      },
    },
  },
};

const Template = (args) => <Hero {...args} />;

export const DefaultHero = Template.bind({});
DefaultHero.args = {
  imageURL:
    'https://images.unsplash.com/photo-1587271511223-18b7ef9a327a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80',
};
