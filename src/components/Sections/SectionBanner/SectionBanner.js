import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';
import { SectionWrapper } from '../SectionWrapper';
import { Heading } from '../../Heading';

const SectionBanner = ({
  sectionTheme,
  imageURL,
  headingColor,
  headingText,
  mainHeaderSize,
  className,
}) => {
  return (
    <SectionWrapper sectionTheme={sectionTheme}>
      <Style.Banner imageURL={imageURL}>
        <Style.CallToAction>
          <Heading
            mainTitle={headingText}
            textColor={headingColor}
            mainTextSize={mainHeaderSize}
          />
          <Style.ExtendedButton
            className={className}
            btnType="light"
            size="small"
            label="Learn more"
          />
        </Style.CallToAction>
      </Style.Banner>
    </SectionWrapper>
  );
};

SectionBanner.propTypes = {
  /**
   * Theme of the section
   */
  sectionTheme: PropTypes.oneOf(['light', 'dark']),
  /**
   * URL to tile image
   */
  imageURL: PropTypes.string,
  /**
   * Color of header text
   */
  headingColor: PropTypes.string,
  /**
   * Primary header text
   */
  headingText: PropTypes.string,
  /**
   * Font size for main header (numeric value withouht "px")
   */
  mainHeaderSize: PropTypes.string,
};

export default SectionBanner;
