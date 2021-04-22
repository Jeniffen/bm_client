/* eslint-disable import/no-anonymous-default-export */
import styled, { css } from 'styled-components';
import { InputLabel } from './../InputLabel';

const InputGroupWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  overflow: visible;
  position: relative;

  max-width: 528px;
  min-height: 96px;

  border-radius: 12px;
  box-shadow: inset 0px 0px 0px 1px #c9c9c9;

  hr.inputGroup {
    box-sizing: border-box;
    width: 100%;
    max-width: 526px;
    border-top: 1px inset rgba(201, 201, 201, 0.3);
    margin: 0 auto;
  }

  ${({ typeErr }) =>
    typeErr &&
    css`
      background: #fff1f0;
      box-shadow: inset 0px 0px 0px 1px #c12315;

      hr.inputGroup {
        border-top: 1px solid rgba(193, 35, 21, 1) !important;
      }
    `}
`;

const ExtendedInputLabel = styled(InputLabel)`
  margin: 2px 0 !important;
`;

const ErrorContainer = styled.div`
  margin: 8px 0 24px 0px;
`;

const GroupContainer = styled.div`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-width: 0;
  }

  :focus-within {
    & hr.inputGroup {
      border-top: 1px solid rgba(217, 217, 217, 0) !important;
    }
  }
`;

const GroupWrapper = ({ typeErr, children }) => {
  return (
    <GroupContainer>
      <InputGroupWrapper typeErr={typeErr}>{children}</InputGroupWrapper>
    </GroupContainer>
  );
};

export default { GroupWrapper, ErrorContainer, ExtendedInputLabel };
