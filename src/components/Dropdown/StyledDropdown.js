import styled, { css } from "styled-components";
import arrowImg from "../Icons/static/icon-down.svg";

export const StyledDropdown = styled.div`
  box-sizing: border-box;
  position: relative;

  select {
    position: absolute;
    background: url(${arrowImg}) no-repeat right;
    background-size: 3%;
    -webkit-appearance: none;
    background-position-x: 95%;
    padding: 16px 16px 4px 14px;
    font-weight: 300;
    font-size: 15px;
    color: #495055;
    height: 100%;
    width: 100%;
    outline: none;
    border-radius: 12px;
    border: ${({ border }) =>
      border ? "2px solid #d9d9d9;" : "2px solid #fff"};

    &:focus {
      border: 2px solid #284b63;
    }
  }

  span {
    position: absolute;
    font-family: sans-serif;
    font-weight: 300;
    color: #a0aec0;
    display: flex;
    font-size: 12px;
    top: 5px;
    left: 16px;
    background: none;
    pointer-events: none;
  }

  ${({ size }) =>
    size === "extra-large" &&
    css`
      width: 100%;
      min-width: 452px;
      max-width: 528px;
      height: 48px;
    `}
`;

export default StyledDropdown;
