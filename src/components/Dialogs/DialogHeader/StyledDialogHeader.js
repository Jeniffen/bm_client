import styled from "styled-components";

export const StyledHeaderWrapper = styled.div`
  position: relative;
  display: flex;
  height: 64px;
  width: 100%;
  max-width: 568px;
  padding: 0 24px;
  background-color: white;
  border-bottom-width: 1px;
  border-bottom: 1px solid #e2e8f0;
  align-items: center;
  justify-content: center;

  h1 {
    width: 100%;
    font-weight: 600;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
      "Helvetica Neue", sans-serif !important;
    text-align: center;
    font-size: 16px;
  }

  button {
    position: absolute;
    left: 24px;
  }
`;
