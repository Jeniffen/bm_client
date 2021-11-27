import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';

const Navbar = ({ className }) => {
  return (
    <Style.NavbarContainer className={className}>
      <Style.NavbarItem NavItemIcon="magnifier" NavItemLabel="Explore" />
      <Style.NavbarItem NavItemIcon="heart" NavItemLabel="Wishlist" />
      <Style.NavbarItem NavItemIcon="avatar" NavItemLabel="Log in" />
    </Style.NavbarContainer>
  );
};

Navbar.propTypes = {
  /**
   * ClassName of element
   */
  className: PropTypes.string,
};

export default Navbar;
