import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';

const Hero = ({ imageURL, className }) => {
  return (
    <Style.HeroWrapper
      className={className}
      imageURL={imageURL}
    ></Style.HeroWrapper>
  );
};

Hero.propTypes = {
  /**
   * URL to tile image
   */
  imageURL: PropTypes.string,
  /**
   * ClassName of element
   */
  className: PropTypes.string,
};

export default Hero;
