import styled from 'styled-components';
import { Icons } from '../Icons';

const containerBackground = (isSolid) => {
  return isSolid ? '#ffffff' : 'transparent';
};

const dialogBackground = (isSolid) => {
  return isSolid ? '#f6f6f6' : '#ffffff';
};

const SearchContainer = styled.div`
  /* box model */
  width: 100%;
  height: 5rem;
  width: 100%;
  padding: 1rem 1.5rem;

  /* background */
  background-color: ${({ isSolid }) => containerBackground(isSolid)};

  /* layout  */
  overflow: hidden;
  display: flex;
  position: fixed;
  top: 0;
  z-index: 1;
`;

const SearchDialog = styled.button`
  /* box model */
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 1.5rem;

  /* background */
  background-color: ${({ isSolid }) => dialogBackground(isSolid)};

  /* layout  */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  /* other */
  cursor: pointer;
  outline-color: #222222;
`;

const DialogLabel = styled.div`
  /* typography */
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.125rem;
  color: #222222;
`;

export const Icon = styled(Icons)`
  /* box model */
  margin: 0.5rem;

  /* other */
  filter: invert(43%) sepia(66%) saturate(3025%) hue-rotate(303deg)
    brightness(86%) contrast(94%);
`;

const Style = { SearchContainer, SearchDialog, DialogLabel, Icon };
export default Style;
