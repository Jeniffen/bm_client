import styled, { css } from "styled-components";
import { Icons } from "../Icons";

export const IconButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background-color: #fff;
  color: #4a5568;
  }

  &:focus {
    outline: none;
    border-radius: 50%;
    border: 1px solid #000;
    background-color: #efefef;
  }

  &:hover {
    background-color: #efefef;
    color: #4a5568;
    cursor: pointer;
  }

  ${({ size }) => {
    switch (size) {
      case "tiny":
        return css`
          width: 22px;
          height: 22px;
        `;
      case "x-small":
        return css`
          width: 25px;
          height: 25px;
        `;
      case "small":
        return css`
          width: 25px;
          height: 25px;
        `;
      default:
        return css`
          width: 25px;
          height: 25px;
        `;
    }
  }};
`;

export const Icon = styled(Icons)`
  margin: 0;
`;

export default { IconButton, Icon };
