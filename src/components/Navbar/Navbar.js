import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';

import useNavbar from './useNavbar';

const Navbar = ({ className }) => {
  const [isHidden, NavbarElements] = useNavbar();

  return (
    <Style.NavbarContainer isHidden={isHidden} className={className}>
      {NavbarElements.map(
        ({ key, itemStatus, icon, label, onItemSelect, to }) => (
          <Style.NavbarItem
            key={key}
            isActive={itemStatus}
            NavItemIcon={icon}
            NavItemLabel={label}
            to={to}
            onClick={onItemSelect}
          />
        )
      )}
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
