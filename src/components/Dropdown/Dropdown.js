import React from "react";
import { StyledDropdown } from "./StyledDropdown";
import PropTypes from "prop-types";

const Dropdown = ({ register, size, type, border }) => {
  const [countryCodes] = React.useState([
    { key: "AT", value: "+43", label: "Austria (+43)" },
    { key: "CAN", value: "+1", label: "Canada (+1)" },
    { key: "DE", value: "+49", label: "Germany (+49)" },
  ]);

  return (
    <StyledDropdown size={size} border={border}>
      <select name={type} ref={register}>
        {countryCodes.map(({ value, label }) => (
          <option key={value} value={value} label={label} />
        ))}
      </select>
      <span>{type}</span>
    </StyledDropdown>
  );
};

Dropdown.propTypes = {
  /**
   * register object for ReactForms
   */
  size: PropTypes.oneOf(["extra-large"]),
  /**
   * How large should the dropdown be?
   */
  size: PropTypes.oneOf(["extra-large"]),
  /**
   * What type of values does dropdown contain
   */
  type: PropTypes.string,
  /**
   * Does input have a border?
   */
  border: PropTypes.bool,
};

export default Dropdown;
