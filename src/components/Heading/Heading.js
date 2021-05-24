import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';

const Heading = ({ mainTitle, textColor, mainTextWeight, className }) => {
  return (
    <Style.Wrapper className={className}>
      <Style.MainHeader textColor={textColor} mainTextWeight={mainTextWeight}>
        {mainTitle}
      </Style.MainHeader>
    </Style.Wrapper>
  );
};

Heading.propTypes = {
  /**
   * Primary header text
   */
  mainTitle: PropTypes.string,
  /**
   * Color of header text
   */
  textColor: PropTypes.string,
  /**
   * Font weight of main header
   */
  mainTextWeight: PropTypes.number,
  /**
   * ClassName of element
   */
  className: PropTypes.string,
};

export default Heading;
