import React from 'react';
import Style from './styles';
import PropTypes from 'prop-types';

const Input = ({
  register,
  size,
  border,
  placeholder,
  prefix,
  value,
  onFocus,
  onBlur,
}) => {
  return (
    <Style.Wrapper size={size}>
      <Style.PrimaryInput
        className="primary"
        onFocus={onFocus}
        onBlur={onBlur}
        prefix={prefix}
        border={border}
        value={value}
      />
      <span>{placeholder}</span>
      {prefix ? (
        <Style.PrefixInput
          className="prefix"
          name={placeholder}
          ref={register}
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
