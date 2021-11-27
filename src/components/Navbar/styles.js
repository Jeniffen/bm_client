import styled from 'styled-components';
import { Icons } from '../Icons';

const NavbarContainer = styled.nav`
  /* box model */
  width: 100%;
  height: 4rem;
  max-width: 35rem;
  padding: 0 0.25rem;
  border-top: 1px solid #ebebeb;

  /* background */
  background-color: #ffffff;

  /* layout  */
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  z-index: 1;
`;

const NavItem = styled.a`
  /* box model */
  width: 20%;
  margin: 0 0.125rem;

  /* layout  */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled(Icons)`
  /* box model */
  margin: 0 0.5rem 0.25rem 0.5rem;

  /* other */
  filter: invert(43%) sepia(66%) saturate(3025%) hue-rotate(303deg)
    brightness(86%) contrast(94%);
`;

const ItemLabel = styled.div`
  /* typography */
  font-size: 0.625rem;
  color: #222222;
`;

export const NavbarItem = ({}) => {
  return (
    <NavItem>
      <Icon className="SearchButton-Icon" type="magnifier" size="small" />
      <ItemLabel>Explore</ItemLabel>
    </NavItem>
  );
};

const Style = {
  NavbarContainer,
  NavbarItem,
};
export default Style;
