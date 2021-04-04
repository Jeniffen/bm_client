import React from 'react';
import Style from './styles';
import PropTypes from 'prop-types';
import useInput from './useInput';

const Input = ({ register, size, border, placeholder, inputPrefix, value }) => {
  const [showLabel, handleInputChange] = useInput({ register });

  return (
    <Style.Wrapper
      onChange={handleInputChange}
      onBlur={handleInputChange}
      size={size}
    >
      <Style.PrimaryInput
        className="primary inputField"
        inputPrefix={inputPrefix}
        border={border}
        value={value}
        {...register}
      />
      <Style.InputLabel showLabel={showLabel}>{placeholder}</Style.InputLabel>
      {inputPrefix ? (
        <Style.PrefixInput
          className="inputPrefix"
          name={placeholder}
          disabled
        />
      ) : null}
    </Style.Wrapper>
  );
};

Input.propTypes = {
  /**
   * How large should the input be?
   */
  size: PropTypes.oneOf(['extra-large']),
  /**
   * Input placeholder
   */
  placeholder: PropTypes.string,
  /**
   * Does input have a border?
   */
  border: PropTypes.bool,
};

export default Input;
