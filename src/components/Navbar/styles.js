import styled from 'styled-components';
import { Icons } from '../Icons';

const containerHeight = (isHidden) => {
  return isHidden ? '0' : '4rem';
};

const containerVisibiliy = (isHidden) => {
  return isHidden ? 'hidden' : 'visible';
};

const iconColor = (isActive) => {
  return isActive
    ? 'invert(43%) sepia(66%) saturate(3025%) hue-rotate(303deg) brightness(86%) contrast(94%)'
    : 'invert(95%) sepia(0%) saturate(679%) hue-rotate(229deg) brightness(82%) contrast(80%)';
};

const labelColor = (isActive) => {
  return isActive ? '#222222' : '#747474';
};

const NavbarContainer = styled.nav`
  /* box model */
  width: 100%;
  height: ${({ isHidden }) => containerHeight(isHidden)};
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

  /* other */
  transition: height 0.2s cubic-bezier(0.4, 0.03, 0.5, 0.95);

  * {
    visibility: ${({ isHidden }) => containerVisibiliy(isHidden)};
    transition: visibility 0.1s;
  }
`;

const NavItem = styled.a`
  /* box model */
  width: 20%;
  margin: 0 0.125rem;

  /* layout  */
  display: flex;
  flex-direction: column;
  align-items: center;

  /* other */
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

export const Icon = styled(Icons)`
  /* box model */
  margin: 0 0.5rem 0.25rem 0.5rem;
  display: flex;
  
  /* other */
  filter: ${({ isActive }) => iconColor(isActive)};
`;

const ItemLabel = styled.div`
  /* typography */
  font-size: 0.625rem;
  font-weight: 500;
  color: ${({ isActive }) => labelColor(isActive)};
`;

export const NavbarItem = ({
  isActive,
  NavItemIcon,
  NavItemLabel,
  onClick,
}) => {
  return (
    <NavItem onClick={onClick}>
      <Icon
        isActive={isActive}
        type={NavItemIcon}
        size="small"
        className="NavbarItem-Icon"
      />
      <ItemLabel isActive={isActive}>{NavItemLabel}</ItemLabel>
    </NavItem>
  );
};

const Style = {
  NavbarContainer,
  NavbarItem,
};
export default Style;
