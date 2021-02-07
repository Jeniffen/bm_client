import React from "react";
import PropTypes from "prop-types";
import Style from "./styles";

const Button = ({ type, label, size, prefixIcon, onClick, className }) => {
  return (
    <Style.Button
      className={className}
      type={type}
      size={size}
      onClick={onClick}
    >
      {prefixIcon ? prefixIcon : null}
      {label}
    </Style.Button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  type: PropTypes.oneOf(["primary", "secondary", "dark", "light"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "extra-large"]),
  /**
   * Element based icon (svg, image etc.)
   */
  prefixIcon: PropTypes.element,
};

export default Button;
