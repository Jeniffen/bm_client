/* eslint-disable import/no-anonymous-default-export */
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  border: none;
  color: #495055;

  ${({ size }) =>
    size === 'extra-large' &&
    css`
      input.primary {
        height: 48px;
        width: 100%;
        min-width: 452px;
        max-width: 528px;
      }
    `}
`;

const PrefixInput = styled.input`
  border: none;
  height: 48px;
  padding: 16px 0 4px 16px;
  font-weight: 300;
  font-size: 15px;

  background: none;
`;

const InputLabel = styled.span`
  position: absolute;
  margin: 15px 0;
  font-family: sans-serif;
  font-weight: 300;
  color: #4f565c;
  display: flex;
  font-size: 15px;
  top: 0px;
  left: 16px;
  transition: all 0.2s;
  transform-origin: 0% 0%;
  background: none;
  pointer-events: none;

  ${({ showLabel }) =>
    showLabel &&
    css`
      transform: scale(0.8) translateY(-10px);
      background: none;
    `}
`;

const PrimaryInput = styled.input`
  box-sizing: border-box;
  height: 48px;
  width: 100%;
  font-weight: 300;
  font-size: 15px;
  color: #495055;
  background: ${({ typeErr }) => (typeErr ? css`#fff1f0` : css`#fff`)};
  outline: none;
  border-radius: 12px;

  ${({ inputPrefix }) =>
    inputPrefix
      ? css`
          position: absolute;
          padding: 20px 0 4px 44px;
        `
      : css`
          position: relative;
          padding: 20px 0 4px 14px;
        `}

  border: ${({ border }) =>
    border ? css`2px solid #d9d9d9` : css`2px solid #fff`};

  &:focus {
    ${({ typeErr }) =>
      typeErr
        ? css`
            border: 2px solid #c12315;
            background: #fff;
          `
        : css`
            border: 2px solid #284b63;
          `}
    + ${InputLabel} {
      transform: scale(0.8) translateY(-10px);
      background: none;
    }
  }
`;

export default { PrefixInput, InputLabel, PrimaryInput, Wrapper };
