import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';
import { InputLabel } from './../InputLabel';

const InputGroup = ({ inputA, inputB, labelText, typeErr, className }) => {
  return (
    <React.Fragment>
      <Style.GroupWrapper
        typeErr={typeErr}
        className={`inputGroup ${className}`}
      >
        {inputA}
        <hr className="inputGroup" />
        {inputB}
      </Style.GroupWrapper>
      {labelText && <InputLabel typeErr={typeErr} labelText={labelText} />}
    </React.Fragment>
  );
};

InputGroup.propTypes = {
  /**
   * First input of input group
   */
  inputA: PropTypes.element,
  /**
   * Second input of input group
   */
  inputB: PropTypes.element,
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

export default InputGroup;
