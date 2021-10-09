import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';

const Hero = ({ imageURL, className }) => {
  return (
    <Style.Wrapper className={className} imageURL={imageURL}></Style.Wrapper>
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
