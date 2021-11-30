import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';

const Tile = ({ className }) => {
  return (
    <Style.Container className={className}>
      <Style.TileImage />
      <Style.TileLabel />
    </Style.Container>
  );
};

Tile.propTypes = {
  /**
   * ClassName of element
   */
  className: PropTypes.string,
};

export default Tile;
