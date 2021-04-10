import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';

const InputLabel = ({ labelText, typeErr, className }) => {
  return (
    <Style.InputLabel
      typeErr={typeErr}
      labelText={labelText}
      className={`inputLabel ${className}`}
    >
      {typeErr ? typeErr?.message : labelText || null}
    </Style.InputLabel>
  );
};

InputLabel.propTypes = {
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

export default InputLabel;
