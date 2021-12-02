import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';

const Tile = ({ imageURL, label, className }) => {
  return (
    <Style.Container className={className}>
      <Style.TileImage imageURL={imageURL} />
      <Style.TileLabel>{label}</Style.TileLabel>
    </Style.Container>
  );
};

Tile.propTypes = {
  /**
   * URL to image that should be displayed in tile
   */
  imageURL: PropTypes.string,
  /**
   * Label within tile
   */
  label: PropTypes.string,
  /**
   * ClassName of element
   */
  className: PropTypes.string,
};

export default Tile;
