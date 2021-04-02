import styled from 'styled-components';

const DialogContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  background-color: #fff;
  border-radius: 12px;
  max-width: 100%;
  width: 568px;
`;

const DialogBody = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 24px;
  margin-bottom: 16px;
`;

export default { DialogContainer, DialogBody };
