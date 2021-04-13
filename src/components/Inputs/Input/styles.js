import styled, { css } from 'styled-components';

const ToggleWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;

  padding-right: 12px;
`;

const ToggleButton = styled.button`
  background: none;

  margin: 0 !important;

  outline: none;

  font-size: 12px;
  font-weight: 400;
  text-decoration: underline;
  cursor: pointer;
`;

const Placeholder = styled.span`
  display: flex;
  position: absolute;
  top: 0px;
  left: 16px;
  transition: all 0.2s;
  transform-origin: 0% 0%;
  background: none;
  pointer-events: none;

  margin: 15px 0;

  color: #4f565c;
  font-family: sans-serif;
  font-size: 15px;
  font-weight: 300;

  ${({ showLabel }) =>
    showLabel
      ? css`
          transform: scale(0.8) translateY(-10px);
        `
      : css`
          transform-origin: 0% 0%;
        `}
`;

const PrimaryInput = styled.input`
  box-sizing: border-box;
  background: transparent;

  padding: 20px 0 4px 14px;

  height: 100%;
  min-height: 48px;
  max-height: 48px;
  width: 100%;

  font-weight: 300;
  font-size: 15px;
  color: #495055;

  border-radius: 12px !important;
  border: none;
  outline: none;

  &:focus {
    + ${Placeholder} {
      transform: scale(0.8) translateY(-10px);
      background: none;
    }
  }
`;

const Wrapper = styled.div`
  * {
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
      'Helvetica Neue', sans-serif !important;
  }

  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: row;

  border: 2px solid transparent !important;

  ${({ size }) =>
    size === 'extra-large' &&
    css`
      height: 52px !important;
      width: 100%;
      min-width: 452px;
      max-width: 528px;
    `}

  border-radius: 12px !important;
  outline: none;

  &:focus-within {
    border: 2px solid #284b63 !important;
    box-shadow: none;
  }
  ${({ grouped }) =>
    grouped
      ? css`
          background: transparent;
          border: 2px solid transparent !important;

          ${({ typeErr }) =>
            typeErr
              ? css`
                  background: transparent;
                  box-shadow: inset 0px 0px 0px 1px transparent;
                `
              : css`
                  background: #fff;
                  background-clip: padding-box;
                `}
        `
      : css`
          background: #fff;
          box-shadow: inset 0px 0px 0px 1px #c9c9c9;

          ${({ typeErr }) =>
            typeErr &&
            css`
              background: #fff1f0;
              box-shadow: inset 0px 0px 0px 1px #c12315;
            `}
        `}

  ${({ typeErr }) =>
    typeErr &&
    css`
      &:focus-within {
        background: #fff;
        border: 2px solid #c12315 !important;
        box-shadow: inset 0px 0px 0px 0px #c9c9c9;
      }
    `}
`;

const PasswordToggle = ({ label, onClick }) => (
  <ToggleWrapper>
    <ToggleButton type="button" onClick={onClick}>
      {label}
    </ToggleButton>
  </ToggleWrapper>
);

const Style = {
  PasswordToggle,
  Placeholder,
  PrimaryInput,
  Wrapper,
};
export default Style;
