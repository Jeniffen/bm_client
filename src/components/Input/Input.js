import React from 'react';
import Style from './styles';
import PropTypes from 'prop-types';
import useInput from './useInput';

const Input = ({
  register,
  type,
  typeErr,
  size,
  border,
  placeholder,
  inputPrefix,
  value,
}) => {
  const [showLabel, handleInputChange] = useInput({ register });

  return (
    <Style.Wrapper onChange={handleInputChange} size={size}>
      <Style.PrimaryInput
        className="primary inputField"
        type={type}
        typeErr={typeErr}
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
