import styled from 'styled-components';

const FormWrapper = styled.form`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #e2e8f0;
  }

  box-sizing: border-box;
  max-width: 528px;
  overflow: visible;

  p {
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
      'Helvetica Neue', sans-serif !important;
    font-size: 12px;
    color: #718096;
    margin: 8px 0 28px 0;
  }

  hr.inputGroup {
    box-sizing: content-box;
    width: 100%;
    border-top: 1px inset rgba(217, 217, 217, 0.24);
    margin: 0;
  }

  button {
    margin-bottom: 12px;
  }
`;

const InputGroup = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 1px;
  box-shadow: inset 0px 0px 0px 1px #d9d9d9;
  border-radius: 12px;
  min-height: 96px;

  :focus-within {
    & hr.inputGroup {
      border-top: 1px solid rgba(217, 217, 217, 0);
    }
  }
`;

const InputWrapper = styled.div`
  box-sizing: border-box;
  padding: 1px;
  box-shadow: inset 0px 0px 0px 1px #d9d9d9;
  border-radius: 12px;

  :focus-within {
    box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0);
`;

const SeparatorStyle = styled.p`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #cbd5e0;
  line-height: 0.1em;
  margin: 28px 0 24px 0 !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    'Helvetica Neue', sans-serif !important;
  font-size: 12px;
  color: #718096;
`;

export default { InputGroup, InputWrapper, FormWrapper, SeparatorStyle };
