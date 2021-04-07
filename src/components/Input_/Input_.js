import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';
import useInput from './useInput';

const Input_ = ({
  size,
  type,
  placeholder,
  labelText,
  typeErr,
  register,
  className,
}) => {
  const [showLabel, handleInputChange] = useInput({ register });

  return (
    <Style.Wrapper size={size} typeErr={typeErr} onChange={handleInputChange}>
      <Style.PrimaryInput
        type={type}
        className={`complexInput ${className}`}
        {...register}
      />
      <Style.Placeholder showLabel={showLabel}>{placeholder}</Style.Placeholder>
      <Style.InputLabel>
        {typeErr ? typeErr?.message : labelText || null}
      </Style.InputLabel>
    </Style.Wrapper>
  );
};

Input_.propTypes = {
  /**
   * Size of the input field
   */
  size: PropTypes.oneOf(['extra-large']),
  /**
   * HTML input type
   */
  type: PropTypes.string,
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
   * Classname of the input field
   */
  className: PropTypes.string,
};

export default Input_;
