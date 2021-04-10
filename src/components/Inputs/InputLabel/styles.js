/* eslint-disable import/no-anonymous-default-export */
import styled, { css } from 'styled-components';

const InputLabel = styled.p`
  max-width: 520px;

  margin: 8px 0 24px 0px !important;
  padding-left: 2px;

  color: #718096;
  font-size: 12px;
  font-weight: 300;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    'Helvetica Neue', sans-serif;

  ${({ typeErr }) =>
    typeErr &&
    css`
      color: #c12315 !important;
    `}
`;

export default { InputLabel };
