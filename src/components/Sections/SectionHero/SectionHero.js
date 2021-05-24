import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';

const SectionHero = ({
  imageURL,
  headingText,
  headingColor,
  mainHeaderWeight,
  className,
}) => {
  return (
    <Style.Wrapper imageURL={imageURL}>
      <Style.CallToAction>
        <Style.Header
          className={className}
          mainTitle={headingText}
          textColor={headingColor}
          mainTextWeight={mainHeaderWeight}
        />
      </Style.CallToAction>
    </Style.Wrapper>
  );
};

SectionHero.propTypes = {
  /**
   * URL to tile image
   */
  imageURL: PropTypes.string,
  /**
   * Primary header text
   */
  headingText: PropTypes.string,
  /**
   * Color of header text
   */
  headingColor: PropTypes.string,
  /**
   * Font size for main header (numeric value withouht "px")
   */
  mainHeaderWeight: PropTypes.number,
  /**
   * ClassName of element
   */
  className: PropTypes.string,
};

export default SectionHero;
