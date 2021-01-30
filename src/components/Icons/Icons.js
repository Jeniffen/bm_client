import React from "react";
import PropTypes from "prop-types";
import Style from "./styles";

const Icons = ({ type, size, alt, className }) => {
  return (
    <Style.Icons className={className} type={type} size={size} alt={alt} />
  );
};

Icons.propTypes = {
  /**
   * Type of logo displayed
   */
  type: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["tiny", "x-small", "small"]),
  /**
   * Alternative text for image
   */
  alt: PropTypes.string,
  /**
   * ClassName of element
   */
  className: PropTypes.string,
};

export default Icons;
