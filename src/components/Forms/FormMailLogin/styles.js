/* eslint-disable import/no-anonymous-default-export */
import styled from 'styled-components';
import { Button } from '../../Button';

const ExtendedButton = styled(Button)`
  margin-top: 16px;
`;

const FormWrapper = styled.form`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #e2e8f0;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  }

  box-sizing: border-box;
  max-width: 528px;
  overflow: visible;
  margin-bottom: 42px;

  p {
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
  min-height: 96px;
  margin-bottom: 16px;

  :focus-within {
    & hr.inputGroup {
      border-top: 1px solid rgba(217, 217, 217, 0);
    }
  }
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-height: 64px;
  max-width: 568px;

  p.password {
    margin-bottom: 32px;
  }

  p {
    margin: 20px 0 22px 0;
    font-size: 14px;
    font-weight: 300;
    color: #4a5568;
  }

  a {
    font-weight: 500;
    text-decoration: underline;
    cursor: pointer;
    color: #000;
    margin: 20px 0 20px 0;
  }
`;

export default { ExtendedButton, InputGroup, FormWrapper, FooterWrapper };
