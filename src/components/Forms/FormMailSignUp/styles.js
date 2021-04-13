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

  max-width: 528px;
  overflow: visible;

  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    'Helvetica Neue', sans-serif !important;

  button {
    margin-bottom: 12px;
  }
`;

const SeparatorStyle = styled.p`
  width: 100%;
  border-bottom: 1px solid #c9c9c9;
  line-height: 0.1em;
  margin: 28px 0 24px 0 !important;
`;

const Paragraph = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: #4a5568;
  margin: 26px 0px;

  a {
    font-weight: 500;
    color: #003d9e;
  }
`;

const Style = { FormWrapper, SeparatorStyle, Paragraph };
export default Style;
