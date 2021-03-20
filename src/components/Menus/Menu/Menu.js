import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { MenuWrapper } from '../MenuWrapper';
import { MenuItem } from '../MenuItem';

const Menu = ({ items }) => {
  return (
    <MenuWrapper>
      {items.map(({ key, weight, text, divider, onClick }) => (
        <MenuItem
          key={key}
          weight={weight}
          text={text}
          divider={divider}
          onClick={onClick}
        />
      ))}
    </MenuWrapper>
  );
};

Menu.propTypes = {
  /**
   * Array of menu item objects
   */
  items: PropTypes.arrayOf(PropTypes.object),
};

export default Menu;
