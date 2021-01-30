import styled from "styled-components";

export const Wrapper = styled.nav`
  box-sizing: border-box;
  display: flex;
  position: relative;
  z-index: 40;
  align-items: center;
  background-color: transparent;
  height: 80px;
  width: 100%;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif !important;

  span {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.025em;
  }
`;

export const Content = styled.div`
  position: relative;
  margin: 0px auto;
  width: 100%;
  max-width: 1760px;
  display: flex;
  justify-content: flex-start;
  }
`;

export default {
  Wrapper,
  Content,
};
