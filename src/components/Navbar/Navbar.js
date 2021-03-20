import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';
import useNavbar from './useNavbar';
import { Toggle } from '../Toggle';
import { Avatar } from '../Avatar';
import { Menu } from '../Menus/Menu';

const Navbar = ({ items, className }) => {
  const [imageURL, userName] = useNavbar();

  return (
    <Style.Wrapper className={className}>
      <Style.Content>
        <Toggle toggleElement={<Menu items={items} />}>
          <Avatar size="small" imageURL={imageURL} username={userName} />
        </Toggle>
      </Style.Content>
    </Style.Wrapper>
  );
};

Navbar.propTypes = {
  /**
   * Array of menu item objects
   */
  items: PropTypes.arrayOf(PropTypes.object),
  /**
   * ClassName of element
   */
  className: PropTypes.string,
};

export default Navbar;
