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
    border-top: 1px inset rgba(201, 201, 201, 0.35);
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
  border-radius: 13px;
  min-height: 96px;

  :focus-within {
    & hr.inputGroup {
      border-top: 1px solid rgba(217, 217, 217, 0);
    }
  }

  ${({ typeErr }) =>
    typeErr
      ? css`
          background: #fff1f0;
          box-shadow: inset 0px 0px 0px 1px #c12315;

          hr.inputGroup {
            border-top: 1px solid rgba(193, 35, 21, 1);
          }
        `
      : css`
          box-shadow: inset 0px 0px 0px 1px #c9c9c9;
        `}
`;

const InputWrapper = styled.div`
  box-sizing: border-box;
  padding: 1px;
  box-shadow: ${({ typeErr }) =>
    typeErr
      ? css`inset 0px 0px 0px 1px #c12315`
      : css`inset 0px 0px 0px 1px #c9c9c9`};
  border-radius: 12px;

  :focus-within {
    box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0);
`;

const SeparatorStyle = styled.p`
  width: 100%;
  border-bottom: 1px solid #c9c9c9;
  line-height: 0.1em;
  margin: 28px 0 24px 0 !important;
`;

export default { InputGroup, InputWrapper, FormWrapper, SeparatorStyle };
