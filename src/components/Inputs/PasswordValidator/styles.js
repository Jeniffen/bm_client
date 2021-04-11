import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  margin: 12px 0;
`;

const Label = styled.p`
  max-width: 520px;

  margin: 2px 0;
  padding-left: 2px;

  color: #718096;
  font-size: 12px;
  font-weight: 400;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    'Helvetica Neue', sans-serif;

  ${({ typeErr }) =>
    typeErr
      ? css`
          color: #009c05 !important;
        `
      : css`
          color: #c12315 !important;
        `}
`;

const Style = { Wrapper, Label };
export default Style;
