/* eslint-disable import/no-anonymous-default-export */
import styled, { css } from 'styled-components';

const InputLabel = styled.p`
  max-width: 520px;

  margin: 8px 0 24px 0px !important;
  padding-left: 2px;

  color: #718096;
  font-size: 12px;
  font-weight: 300;
`;

const Placeholder = styled.span`
  display: flex;
  position: absolute;
  top: 0px;
  left: 16px;
  transition: all 0.2s;
  transform-origin: 0% 0%;
  background: none;
  pointer-events: none;

  margin: 15px 0;

  color: #4f565c;
  font-family: sans-serif;
  font-size: 15px;
  font-weight: 300;

  ${({ showLabel }) =>
    showLabel
      ? css`
          transform: scale(0.8) translateY(-10px);
        `
      : css`
          transform-origin: 0% 0%;
        `}
`;

const PrimaryInput = styled.input`
  box-sizing: border-box;
  background: #fff;

  padding: 20px 0 4px 14px;

  height: 48px;
  width: 100%;

  font-weight: 300;
  font-size: 15px;
  color: #495055;

  border: 2px solid #fff;
  border-radius: 12px;
  box-shadow: inset 0px 0px 0px 1px #c9c9c9;
  outline: none;

  &:focus {
    border: 2px solid #284b63;
    box-shadow: none;

    + ${Placeholder} {
      transform: scale(0.8) translateY(-10px);
      background: none;
    }
  }
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

  ${({ typeErr }) =>
    typeErr &&
    css`
      ${InputLabel} {
        color: #c12315;
      }

      ${PrimaryInput} {
        background: #fff1f0;
        box-shadow: inset 0px 0px 0px 1px #c12315;

        &:focus {
          background: #fff;
          border: 2px solid #c12315;
          box-shadow: inset 0px 0px 0px 0px #c9c9c9;
        }
      }
    `}
`;

export default { InputLabel, Placeholder, PrimaryInput, Wrapper };
