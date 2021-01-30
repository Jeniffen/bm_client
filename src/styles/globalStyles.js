import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
      "Helvetica Neue", sans-serif !important;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    background-color: #f7fafc;
    margin: 0;
  }
`;

export default GlobalStyle;
