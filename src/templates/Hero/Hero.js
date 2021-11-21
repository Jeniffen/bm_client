import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';

const Hero = ({ imageURL, heroTagline, className }) => {
  return (
    <Style.HeroWrapper className={className} imageURL={imageURL}>
      <Style.HeroContent>
        <Style.HeroTagline>{heroTagline}</Style.HeroTagline>
      </Style.HeroContent>
    </Style.HeroWrapper>
  );
};

Hero.propTypes = {
  /**
   * URL to tile image
   */
  imageURL: PropTypes.string,
  /**
   * Tagline or header appearing in Hero section
   */
  heroTagline: PropTypes.string,
  /**
   * ClassName of element
   */
  className: PropTypes.string,
};

export default Hero;
