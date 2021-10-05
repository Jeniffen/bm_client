import styled from 'styled-components';

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  width: 100%;

  margin-bottom: 30px;

  text-align: left;
  letter-spacing: -0.1em;
  line-height: 0.8;
`;

export const MainHeader = styled.span`
  padding: 0 0.1em;

  color: ${({ textColor }) => textColor};
  font-weight: ${({ mainTextWeight }) => mainTextWeight};
  font-size: min(4em, 18vw);
  white-space: pre-line;
`;

const Style = { Wrapper, MainHeader };

export default Style;
