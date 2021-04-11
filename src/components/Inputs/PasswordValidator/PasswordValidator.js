import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';
import usePasswordValidator from './usePasswordValidator';

const PasswordValidator = ({ value, showValidPassowrd }) => {
  const [
    meetsMin,
    meetsNum,
    meetsSym,
    msgsMin,
    msgNum,
    msgSym,
  ] = usePasswordValidator({ value });
  return (
    <>
      {showValidPassowrd ? (
        meetsMin && meetsNum && meetsSym ? null : (
          <Style.Wrapper>
            <Style.Label typeErr={meetsMin}>{msgsMin}</Style.Label>
            <Style.Label typeErr={meetsNum}>{msgNum}</Style.Label>
            <Style.Label typeErr={meetsSym}>{msgSym}</Style.Label>
          </Style.Wrapper>
        )
      ) : null}
    </>
  );
};

PasswordValidator.propTypes = {
  /**
   * Value that is getting validated
   */
  value: PropTypes.any,
  /**
   * Indicator if validator should be shown
   */
  showValidPassowrd: PropTypes.bool,
};

export default PasswordValidator;
