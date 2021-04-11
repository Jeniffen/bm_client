import React from 'react';
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
  typeErr,
  onClick,
  register,
  className,
}) => {
  const [showLabel, handleInputChange] = useInput({ register });

  return (
    <Style.Wrapper size={size} onChange={handleInputChange}>
      <Style.PrimaryInput
        type={type}
        grouped={grouped}
        typeErr={typeErr}
        onClick={onClick}
        className={`complexInput ${className}`}
        {...register}
      />
      <Style.Placeholder showLabel={showLabel}>{placeholder}</Style.Placeholder>
      {labelText && <InputLabel typeErr={typeErr} labelText={labelText} />}
    </Style.Wrapper>
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
