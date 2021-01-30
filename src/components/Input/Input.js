import React from "react";
import { StyledInput } from "./StyledInput";
import PropTypes from "prop-types";

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
    <StyledInput size={size} border={border}>
      <input
        className="primary"
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
      />
      <span>{placeholder}</span>
      {prefix ? (
        <input className="prefix" name={placeholder} ref={register} disabled />
      ) : null}
    </StyledInput>
  );
};

Input.propTypes = {
  /**
   * How large should the input be?
   */
  size: PropTypes.oneOf(["extra-large"]),
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
