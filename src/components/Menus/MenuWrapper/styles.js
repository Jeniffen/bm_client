import styled from "styled-components";

export const Wrapper = styled.div`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #e2e8f0;
  }

  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  width: 220px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 16px;
`;

export default { Wrapper };
