import styled from 'styled-components';
import { Link } from 'react-router-dom';

const fontWeight = ({ weight }) => {
  switch (weight) {
    case 'light':
      return 400;
    case 'medium':
      return 500;
    case 'bold':
      return 700;
    default:
      return 400;
  }
};
export const ItemLink = styled(Link)`
  display: flex;
  line-height: 18px;
  padding: 12px 16px;
  margin: 0;
  width: 208;
  font-size: 14px;
  font-weight: ${fontWeight};
  text-decoration: none;
  color: #222222;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif !important;
  align-items: center;

  &:hover {
    background-color: #f7f7f7;
  }

  &:focus {
    outline-color:  #000;
`;

export const Separator = styled.hr`
  border-top: 1px inset rgba(217, 217, 217, 0.24);
  width: 100%;
`;

export default { ItemLink, Separator };
