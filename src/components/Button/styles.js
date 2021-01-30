import styled, { css } from "styled-components";

export const Button = styled.button`

  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 8px;
  border: none;
  height: 48px;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  max-width: ${({ size }) => {
    switch (size) {
      case "small":
        return "133px";
      case "extra-large":
        return "528px";
      default:
        return "528px";
    }
  }};

  ${({ type }) =>
    type === "primary" &&
    css`
      background-color: #d53f8c;
      color: #fff;

      &:hover {
        transition: background-color 0.2s ease;
        background-color: #b83280;
      }
    `}

  ${({ type }) =>
    type === "secondary" &&
    css`
      border: 2px solid #a0aec0;
      background-color: #fff;
      color: #4a5568;

      &:hover {
        border: 2px solid #000;
      }
    `}

  & img {
    position: absolute;
    left: 0;
  }

  ${({ type }) =>
    type === "dark" &&
    css`
      border: 2px solid #a0aec0;
      background-color: #000;
      color: #a0aec0;

      &:hover {
        border: 2px solid #fff;
        color: #fff;
      }
    `}

  }

  ${({ type }) =>
    type === "light" &&
    css`
      background-color: #fff;
      color: #484848;

      &:hover {
        background-color: #efefef;
      }
    `}

  }
`;

export default { Button };
