import React from 'react';
import { GlobalStyle } from '../src/styles/globalStyles';

// Global decorator to apply the styles to all stories
export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

const customViewports = {
  MotoG4: {
    name: 'Moto G4',
    styles: {
      width: '360px',
      height: '640px',
    },
  },
  GalaxyS5: {
    name: 'Galaxy S5',
    styles: {
      width: '360px',
      height: '640px',
    },
  },
  Pixel2: {
    name: 'Pixel 2',
    styles: {
      width: '411px',
      height: '731px',
    },
  },
  Pixel2XL: {
    name: 'Pixel 2 XL',
    styles: {
      width: '411px',
      height: '823px',
    },
  },
  iPhone5: {
    name: 'iPhone 5/SE',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
  iPhone6: {
    name: 'iPhone 6/7/8',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  iPhone6Plus: {
    name: 'iPhone 6/7/8 Plus',
    styles: {
      width: '414px',
      height: '763px',
    },
  },
  iPhoneX: {
    name: 'iPhone X',
    styles: {
      width: '375px',
      height: '812px',
    },
  },
  iPad: {
    name: 'iPad',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  iPadPro: {
    name: 'iPad Pro',
    styles: {
      width: '1024px',
      height: '1366px',
    },
  },
  SurfaceDuo: {
    name: 'Surface Duo',
    styles: {
      width: '540px',
      height: '720px',
    },
  },
  GalaxyFold: {
    name: 'Galaxy Fold',
    styles: {
      width: '280px',
      height: '653px',
    },
  },
  NestHub: {
    name: 'Nest Hub',
    styles: {
      width: '1024px',
      height: '600px',
    },
  },
  NestHubMax: {
    name: 'Nest Hub Max',
    styles: {
      width: '1280px',
      height: '800px',
    },
  },
};

export const parameters = {
  options: {
    storySort: {
      order: ['Example', 'COMPONENTS'],
    },
  },
  viewport: {
    defaultViewport: 'iPhoneX',
    viewports: {
      ...customViewports,
    },
  },
  layout: ['fullscreen'],
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
