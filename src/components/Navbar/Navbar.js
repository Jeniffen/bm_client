import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';

const Navbar = ({}) => {
  return (
    <Style.NavbarContainer>
      <Style.NavbarItem></Style.NavbarItem>
      <Style.NavbarItem></Style.NavbarItem>
      <Style.NavbarItem></Style.NavbarItem>
    </Style.NavbarContainer>
  );
};

Navbar.propTypes = {};

export default Navbar;
