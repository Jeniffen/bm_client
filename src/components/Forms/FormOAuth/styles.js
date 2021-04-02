import styled from 'styled-components';

const FormWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 568px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    'Helvetica Neue', sans-serif !important;

  form {
    margin-bottom: 16px;
  }
`;

const SeparatorStyle = styled.p`
  width: 100%;
  max-width: 528px;
  text-align: center;
  border-bottom: 1px solid #cbd5e0;
  line-height: 0.1em;
  margin: 6px 0 24px 0;

  font-size: 12px;
  color: #718096;

  & span {
    background: #fff;
    padding: 0 10px;
  }
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-height: 64px;
  max-width: 568px;

  p {
    margin: 5px 0;
    font-size: 14px;
    font-weight: 300;
    color: #4a5568;
  }

  a {
    font-weight: 500;
    text-decoration: underline;
    cursor: pointer;
    color: #000;
  }
`;

const DialogSeparator = ({ seperatorText }) => {
  return (
    <SeparatorStyle>
      <span>{seperatorText}</span>
    </SeparatorStyle>
  );
};

export default { FormWrapper, DialogSeparator, FooterWrapper };
