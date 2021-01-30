import React from "react";
import PropTypes from "prop-types";
import Style from "./styles";

const MenuWrapper = ({ children }) => {
  return <Style.Wrapper>{children}</Style.Wrapper>;
};

MenuWrapper.propTypes = {
  /**
   * Menu items that will be displayed in Wrapper
   */
  children: PropTypes.node.isRequired,
};

export default MenuWrapper;
