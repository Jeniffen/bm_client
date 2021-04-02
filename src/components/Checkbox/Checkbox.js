import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';
import useCheckbox from './useCheckbox';

const Checkbox = ({ labelText }) => {
  const [checked, handleCheckboxChange] = useCheckbox();
  return (
    <Style.LabelWrapper>
      <Style.Checkbox checked={checked} onClick={handleCheckboxChange} />
      <span onClick={handleCheckboxChange}>{labelText}</span>
    </Style.LabelWrapper>
  );
};

Checkbox.propTypes = {
  /**
   * Text shown next to checkbox
   */
  labelText: PropTypes.string,
};

export default Checkbox;
