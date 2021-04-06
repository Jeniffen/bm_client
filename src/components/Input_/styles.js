/* eslint-disable import/no-anonymous-default-export */
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  box-sizing: border-box;
  position: relative;

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

const InputLabel = styled.span`
  display: flex;
  position: absolute;
  top: 0px;
  left: 16px;
  transition: all 0.2s;
  transform-origin: 0% 0%;
  background: none;
  pointer-events: none;

  margin: 15px 0;

  font-family: sans-serif;
  font-weight: 300;
  font-size: 15px;
  color: #4f565c;

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

  font-weight: 300;
  font-size: 15px;
  color: #495055;

  border: none;
  border-radius: 12px;
  box-shadow: inset 0px 0px 0px 1px #c9c9c9;
  outline: none;

  &:focus {
    border: 2px solid #284b63 !important;
    box-shadow: none;

    + ${InputLabel} {
      transform: scale(0.8) translateY(-10px);
      background: none;
    }
  }

  ${({ typeErr }) =>
    typeErr &&
    css`
      background: #fff1f0;
      box-shadow: inset 0px 0px 0px 1px #c12315;

      &:focus {
        border: 2px solid #c12315;
      }
    `}
`;

export default { InputLabel, PrimaryInput, Wrapper };
