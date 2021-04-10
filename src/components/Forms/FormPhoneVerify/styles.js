import styled, { css } from 'styled-components';

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
  margin-top: 16px;
  max-width: 528px;
  overflow: hidden;

  p {
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;

    font-size: 12px;
    color: #718096;
    margin 8px 0 14px 0;
  }

  hr.inputGroup {
    box-sizing: border-box;
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
  background: #fff;
  min-height: 96px;

  :focus-within {
    & hr.inputGroup {
      border-top: 1px solid rgba(217, 217, 217, 0);
    }
  }
`;

export default { InputGroup, FormWrapper };
