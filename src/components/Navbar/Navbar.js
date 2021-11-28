import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';

import useNavbar from './useNavbar';

const Navbar = ({ className }) => {
  const [itemStatus, onItemSelect] = useNavbar();
  return (
    <Style.NavbarContainer className={className}>
      <Style.NavbarItem
        isActive={itemStatus.explore}
        NavItemIcon="magnifier"
        NavItemLabel="Explore"
        onClick={() => onItemSelect('explore')}
      />
      <Style.NavbarItem
        isActive={itemStatus.wishlist}
        NavItemIcon="heart"
        NavItemLabel="Wishlist"
        onClick={() => onItemSelect('wishlist')}
      />
      <Style.NavbarItem
        isActive={itemStatus.login}
        NavItemIcon="avatar"
        NavItemLabel="Log in"
        onClick={() => onItemSelect('login')}
      />
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
