import React from "react";
import PropTypes from "prop-types";
import Style from "./styles";

const IconButton = ({ type, iconType, size, onClick, className }) => {
  return (
    <Style.IconButton
      type={type}
      className={className}
      size={size}
      onClick={onClick}
    >
      <Style.Icon type={iconType} size={size} />
    </Style.IconButton>
  );
};

IconButton.propTypes = {
  /**
   * Type of button in order determine if part of form or not
   */
  type: PropTypes.string,
  /**
   * Type of icon to shown within button
   */
  iconType: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["tiny", "x-small", "small"]),
  /**
   * Callback functions to be executed onClick
   */
  onClick: PropTypes.func,
  /**
   * ClassName of element
   */
  className: PropTypes.string,
};

export default IconButton;
