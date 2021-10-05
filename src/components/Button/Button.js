import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';

const Button = ({
  buttonType,
  type,
  label,
  size,
  prefixIcon,
  onClick,
  className,
}) => {
  return (
    <Style.Button
      className={className}
      buttonType={buttonType}
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
  buttonType: PropTypes.oneOf(['primary', 'secondary', 'dark', 'light']),
  /**
   * Type of element
   */
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'extra-large']),
  /**
   * Element based icon (svg, image etc.)
   */
  prefixIcon: PropTypes.element,
};

export default Button;
