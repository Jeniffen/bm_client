import styled from "styled-components";

export const DialogContainer = styled.div`
  box-sizing: border-box;

  position: relative;
  overflow: hidden;
  background-color: #fff;
  border-radius: 12px;
  max-width: 100%;
  height: 664px;
  width: 568px;
`;

export const DialogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 24px;

  form {
    margin-bottom: 16px;
  }
`;

const SeparatorStyle = styled.p`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #cbd5e0;
  line-height: 0.1em;
  margin: 6px 0 24px 0;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif !important;
  font-size: 12px;
  color: #718096;

  & span {
    background: #fff;
    padding: 0 10px;
  }
`;

export const DialogSeparator = ({ seperatorText }) => {
  return (
    <SeparatorStyle>
      <span>{seperatorText}</span>
    </SeparatorStyle>
  );
};

export default { DialogContainer, DialogWrapper, DialogSeparator };
