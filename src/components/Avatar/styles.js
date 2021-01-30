import styled, { css } from "styled-components";

export const Avatar = styled.div`
  box-sizing: border-box;
  border-radius: 50%;
  border: 2px solid #a0aec0;
  width: 50px;
  height: 50px;
  background-color: #a0aec0;

  :hover {
    cursor: pointer;
    background-color: #94aab6;
    border: 2px solid #94aab6;
  }

  img {
    display: block;
    border-radius: 50%;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  ${({ size }) => {
    switch (size) {
      case "tiny":
        return css`
          width: 25px;
          height: 25px;
        `;
      case "small":
        return css`
          width: 40px;
          height: 40px;
        `;
      case "medium":
        return css`
          width: 50px;
          height: 50px;
        `;
      default:
        return css`
          width: 50px;
          height: 50px;
        `;
    }
  }};
`;

export default { Avatar };
