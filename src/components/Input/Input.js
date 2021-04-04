import React from 'react';
import Style from './styles';
import PropTypes from 'prop-types';

const Input = ({ register, size, border, placeholder, prefix, value }) => {
  return (
    <Style.Wrapper size={size}>
      <Style.PrimaryInput
        className="primary"
        prefix={prefix}
        border={border}
        value={value}
        {...register}
      />
      <span>{placeholder}</span>
      {prefix ? (
        <Style.PrefixInput className="prefix" name={placeholder} disabled />
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
