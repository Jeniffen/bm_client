import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Style from './styles';
import useInput from './useInput';
import { InputLabel } from './../InputLabel';

const Input = ({
  size,
  type,
  grouped,
  placeholder,
  labelText,
  togglePassword,
  typeErr,
  onClick,
  register,
  className,
}) => {
  const [showLabel, handleInputChange] = useInput({ register });

  const [showPassword, setShowPassword] = useState({
    toggle: false,
    inputType: 'password',
    label: 'Show',
  });

  const handleTogglePassword = () => {
    setShowPassword({
      toggle: !showPassword.toggle,
      inputType: showPassword.toggle ? 'password' : 'text',
      label: showPassword.toggle ? 'Show' : 'Hide',
    });
  };

  const inputType = type === 'password' ? showPassword.inputType : type;

  return (
    <>
      <Style.Wrapper
        size={size}
        typeErr={typeErr}
        grouped={grouped}
        onChange={handleInputChange}
      >
        <Style.PrimaryInput
          type={inputType}
          onClick={onClick}
          className={`complexInput ${className}`}
          autocomplete="off"
          {...register}
        />
        <Style.Placeholder showLabel={showLabel}>
          {placeholder}
        </Style.Placeholder>
        {togglePassword && (
          <Style.ToggleWrapper>
            <Style.ToggleButton type="button" onClick={handleTogglePassword}>
              {showPassword.label}
            </Style.ToggleButton>
          </Style.ToggleWrapper>
        )}
      </Style.Wrapper>
      {labelText && <InputLabel typeErr={typeErr} labelText={labelText} />}
    </>
  );
};

Input.propTypes = {
  /**
   * Size of the input field
   */
  size: PropTypes.oneOf(['extra-large']),
  /**
   * HTML input type
   */
  type: PropTypes.string,
  /**
   * Indicator if element is part of an input group
   */
  grouped: PropTypes.bool,
  /**
   * Placeholder text within the input field
   */
  placeholder: PropTypes.string,
  /**
   * Text of label below input field
   */
  labelText: PropTypes.string,
  /**
   * Error object passed from form validation
   */
  typeErr: PropTypes.object,
  /**
   * Function to trigger when clicked on input field
   */
  onClick: PropTypes.func,
  /**
   * Object with form elements
   */
  register: PropTypes.object,
  /**
   * Classname of the input field
   */
  className: PropTypes.string,
};

export default Input;
