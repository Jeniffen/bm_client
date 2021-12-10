import styled from 'styled-components';
import { Icons } from '../Icons';

const containerBackground = (isSolid) => {
  return isSolid ? '#ffffff' : 'transparent';
};

const dialogBackground = (isSolid) => {
  return isSolid ? '#f6f6f6' : '#ffffff';
};

const dialogShadow = (isSolid) => {
  return isSolid ? 'none' : '0px 6px 20px rgb(0 0 0 / 20%) !important';
};

const SearchContainer = styled.div`
  /* box model */
  width: 100%;
  height: 5rem;
  padding: 1rem 1.5rem;

  /* background */
  background-color: ${({ isSolid }) => containerBackground(isSolid)};

  /* layout  */
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 1;
`;

const DialogContainer = styled.div`
  /* box model */
  width: 100%;
  max-width: 46rem;
  height: 3rem;
  border-radius: 1.5rem;

  /* other */
  box-shadow: ${({ isSolid }) => dialogShadow(isSolid)};
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

const Dialog = ({ isSolid, searchDialogLabel }) => {
  return (
    <DialogContainer isSolid={isSolid}>
      <SearchDialog isSolid={isSolid}>
        <Icon className="SearchButton-Icon" type="magnifier" size="x-small" />
        <DialogLabel>{searchDialogLabel}</DialogLabel>
      </SearchDialog>
    </DialogContainer>
  );
};

const Style = {
  SearchContainer,
  Dialog,
};
export default Style;
