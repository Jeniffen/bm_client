import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';

const Dropdown = ({ size, grouped, labelText, className }) => {
  const [countryCodes] = React.useState([
    { key: 'AT', value: '+43', label: 'Austria (+43)' },
    { key: 'CAN', value: '+1', label: 'Canada (+1)' },
    { key: 'DE', value: '+49', label: 'Germany (+49)' },
  ]);

  return (
    <Style.Wrapper size={size}>
      <Style.Dropdown grouped={grouped} className={`complexInput ${className}`}>
        {countryCodes.map(({ value, label }) => (
          <option key={value} value={value} label={label} />
        ))}
      </Style.Dropdown>
      <Style.DropdownLabel>{labelText}</Style.DropdownLabel>
    </Style.Wrapper>
  );
};

Dropdown.propTypes = {
  /**
   * Size of the input field
   */
  size: PropTypes.oneOf(['extra-large']),
  /**
   * Indicator if element is part of an input group
   */
  grouped: PropTypes.bool,
  /**
   * Text of label below input field
   */
  labelText: PropTypes.string,
  /**
   * Classname of the input field
   */
  className: PropTypes.string,
};

export default Dropdown;
