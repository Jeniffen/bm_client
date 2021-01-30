import styled, { css } from "styled-components";

export const StyledInput = styled.div`
  box-sizing: border-box;
  position: relative;
  border: none;

  input.primary {
    box-sizing: border-box;
    position: absolute;
    padding: 16px 0 4px 44px;
    height: 48px;
    width: 100%;
    font-weight: 300;
    font-size: 15px;
    color: #495055;
    background: none;
    outline: none;
    border-radius: 12px;
    border: ${({ border }) =>
      border ? "2px solid #d9d9d9;" : "2px solid #fff"};

    &:focus {
      border: 2px solid #284b63;

      + span {
        transform: scale(0.8) translateY(-10px);
        background: none;
      }
    }
  }

  input.prefix {
    border: none;
    height: 48px;
    padding: 16px 0 4px 16px;
    font-weight: 300;
    font-size: 15px;
    color: #495055;
    background: none;
  }

  span {
    position: absolute;
    margin: 15px 0;
    font-family: sans-serif;
    font-weight: 300;
    color: #a0aec0;
    display: flex;
    font-size: 15px;
    top: 0px;
    left: 16px;
    transition: all 0.2s;
    transform-origin: 0% 0%;
    background: none;
    pointer-events: none;
  }

  ${({ size }) =>
    size === "extra-large" &&
    css`
      input.primary {
        width: 100%;
        min-width: 452px;
        max-width: 528px;
        max-height: 48px;
      }
    `}
`;

export default StyledInput;
