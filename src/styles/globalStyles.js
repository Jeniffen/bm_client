import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Circular',-apple-system,'BlinkMacSystemFont','Roboto','Helvetica Neue',sans-serif !important;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    background-color: #f7fafc;
    /*TODO Set all margin to 0 when mobile navbar disappears when bottom is reached*/
    margin: 0 0 7.5rem 0;
  }
`;
