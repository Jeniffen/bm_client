import styled from 'styled-components';

const Wrapper = styled.div`
  box-sizing: 'border-box';
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  z-index: 100000;
  top: 0;
  left: 0;
  background: rgba(72, 72, 72, 0.5);
  height: 100%;
  width: 100%;
`;

const Content = styled.div`
  display: inline-block;
`;

const Style = {
  Wrapper,
  Content,
};

export default Style;
