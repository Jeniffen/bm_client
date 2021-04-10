/* eslint-disable import/no-anonymous-default-export */
import styled, { css } from 'styled-components';
import arrowImg from '../../Icons/static/icon-down.svg';

const DropdownLabel = styled.span`
  position: absolute;
  top: 5px;
  left: 16px;
  background: none;

  font-weight: 300;
  font-size: 12px;
  color: #a0aec0;

  pointer-events: none;
`;

const Dropdown = styled.select`
  box-sizing: border-box;
  background-clip: padding-box;
  background: url(${arrowImg}) no-repeat right;
  -webkit-appearance: none;
  background-size: 3%;
  background-position-x: 95%;

  padding: 16px 16px 4px 14px;

  font-weight: 300;
  font-size: 15px;
  color: #495055;

  height: 48px;
  width: 100%;
  max-width: 528px;

  outline: none;
  border-radius: 12px;

  box-shadow: inset 0px 0px 0px 1px #c9c9c9;

  &:focus {
    border: 2px solid #284b63;
    box-shadow: inset 0px 0px 0px 1px transparent;
  }

  ${({ grouped }) =>
    grouped
      ? css`
          box-shadow: inset 0px 0px 0px 1px transparent;
          border: 2px solid transparent;
        `
      : css`
          border: 2px solid #fff;
          box-shadow: inset 0px 0px 0px 1px #c9c9c9;
        `}
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  position: relative;

  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    'Helvetica Neue', sans-serif !important;

  ${({ size }) =>
    size === 'extra-large' &&
    css`
      input.complexInput {
        height: 48px;
        width: 100%;
        min-width: 452px;
        max-width: 528px;
      }
    `}
`;

export default { DropdownLabel, Dropdown, Wrapper };
