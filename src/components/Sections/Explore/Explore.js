import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';

const Explore = ({ imageURL, className }) => {
  return (
    <Style.Container className={className}>
      <Style.Image imageURL={imageURL} />
    </Style.Container>
  );
};

Explore.propTypes = {
  /**
   * URL to image that should be displayed in tile
   */
  imageURL: PropTypes.string,
  /**
   * ClassName of element
   */
  className: PropTypes.string,
};

export default Explore;
