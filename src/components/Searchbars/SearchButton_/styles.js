import styled, { css } from "styled-components";
import { Icons } from "../../Icons";

export const Label = styled.span`
  font-size: 16px;
  color: transparent;
  padding-right: 18px;
`;

export const Icon = styled(Icons)`
  filter: invert(1);
  margin: 0;
`;

export const Button = styled.button`
  box-sizing: border-box;
  display: flex;
  height: 48px;
  max-height: 48px;
  width: 48px;
  transition: width 0.1s ease;
  border-radius: ${({ expand }) => (expand ? "24px" : "50%")};
  background-color: #d53f8c;
  border: none;
  outline: none;
  align-items: center;
  justify-content: center;
  padding: 0;

  ${Label} {
    display: none;
  }

  :hover {
    transition: background-color 0.2s ease !important;
    background-color: #e43991;
  }

  ${({ expand }) =>
    expand &&
    css`
      transition: color 0.1s linear;
      width: 119px !important;
      justify-content: left;

      ${Label} {
        color: #fff;
        display: flex;
        margin: 0 6px;
      }

      ${Icon} {
        margin: 0 8px 0 20px;
      }
    `}
`;

export default { Label, Icon, Button };
