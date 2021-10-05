import styled from 'styled-components';

const defaultBackgroundColor = (buttonType) => {
  switch (buttonType) {
    case 'primary':
      return '#d53f8c';
    case 'secondary':
      return '#ffffff';
    case 'light':
      return '#ffffff';
    case 'dark':
      return '#000000';
    default:
      return '#d53f8c';
  }
};

const hoverBackgroundColor = (buttonType) => {
  switch (buttonType) {
    case 'primary':
      return '#b83280';
    case 'secondary':
      return '#ffffff';
    case 'light':
      return '#efefef';
    case 'dark':
      return '#000000';
    default:
      return '#b83280';
  }
};

const defaultColor = (buttonType) => {
  switch (buttonType) {
    case 'primary':
      return '#ffffff';
    case 'secondary':
      return '#4a5568';
    case 'light':
      return '#484848';
    case 'dark':
      return '#a0aec0';
    default:
      return '#d53f8c';
  }
};

const hoverColor = (buttonType) => {
  switch (buttonType) {
    case 'primary':
      return '#ffffff';
    case 'secondary':
      return '#4a5568';
    case 'light':
      return '#484848';
    case 'dark':
      return '#ffffff';
    default:
      return '#d53f8c';
  }
};

const defaultMaxtWidth = (size) => {
  switch (size) {
    case 'small':
      return '133px';
    case 'extra-large':
      return '528px';
    default:
      return '528px';
  }
};

const defaultBorder = (buttonType) => {
  switch (buttonType) {
    case 'primary':
      return '2px solid transparent';
    case 'secondary':
      return `2px solid #a0aec0`;
    case 'light':
      return '2px solid transparent';
    case 'dark':
      return '2px solid #a0aec0';
    default:
      return '2px solid transparent';
  }
};

const hoverBorder = (buttonType) => {
  switch (buttonType) {
    case 'primary':
      return '2px solid transparent';
    case 'secondary':
      return `2px solid #000000`;
    case 'light':
      return '2px solid transparent';
    case 'dark':
      return '2px solid #ffffff';
    default:
      return '2px solid transparent';
  }
};

export const Button = styled.button`
  box-sizing: border-box;
  border: ${({ buttonType }) => defaultBorder(buttonType)};
  border-radius: 8px;
  height: 48px;
  max-width: ${({ size }) => defaultMaxtWidth(size)};
  width: 100%;
  padding: 1px 10px;
  background-color: ${({ buttonType }) => defaultBackgroundColor(buttonType)};
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: ${({ buttonType }) => defaultColor(buttonType)};

  &:hover {
    border: ${({ buttonType }) => hoverBorder(buttonType)};
    background-color: ${({ buttonType }) => hoverBackgroundColor(buttonType)};
    color: ${({ buttonType }) => hoverColor(buttonType)};
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  &:focus {
    outline: none;
  }

  & img {
    position: absolute;
    left: 0;
  }
`;

const Style = { Button };
export default Style;
