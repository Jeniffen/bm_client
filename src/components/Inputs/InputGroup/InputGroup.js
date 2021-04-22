import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';
import { InputLabel } from './../InputLabel';

const InputGroup = ({
  inputA,
  inputB,
  labelText,
  forceLabel,
  typeErr,
  resErr,
  className,
}) => {
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
      {(labelText || forceLabel) && (
        <Style.ErrorContainer>
          <Style.ExtendedInputLabel typeErr={typeErr} labelText={labelText} />
          <Style.ExtendedInputLabel typeErr={resErr} />
        </Style.ErrorContainer>
      )}
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
   * Indicator to show error labels even if no regular label is passed
   */
  forceLabel: PropTypes.bool,
  /**
   * Text of label below input field
   */
  labelText: PropTypes.string,
  /**
   * Error object passed from form validation
   */
  typeErr: PropTypes.object,
  /**
   * Error object passed from response object
   */
  resErr: PropTypes.object,
  /**
   * Classname of the input field
   */
  className: PropTypes.string,
};

export default InputGroup;
