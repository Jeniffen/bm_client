import React from 'react';
import styled from 'styled-components';

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${(props) => (props.checked ? 'black' : 'white')};
  border: 1px solid #cbd5e0 !important;
  border-radius: 4px;
  transition: all 150ms;

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }

  &:hover {
    border: 1px solid #000 !important;
  }
`;

const LabelWrapper = styled.label`
  span {
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
      'Helvetica Neue', sans-serif !important;
    font-size: 12px;
    font-weight: 300;
    color: #4a5568;
    margin: 8px 0 28px 12px;
  }

  &:hover {
    ${StyledCheckbox} {
      border: 1px solid #000 !important;
    }
  }
`;

const Checkbox = ({ className, checked, onClick, register }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox Checked={checked} {...register} />
    <StyledCheckbox checked={checked} onClick={onClick}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

const Style = { LabelWrapper, Checkbox };
export default Style;
