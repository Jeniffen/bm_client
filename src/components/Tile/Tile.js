import React from "react";
import PropTypes from "prop-types";
import Style from "./styles";

const Tile = ({ imageURL, tileSize, tileType, title }) => {
  return (
    <Style.TileWrapper tileSize={tileSize}>
      <Style.TileImage
        imageURL={imageURL}
        tileSize={tileSize}
        tileType={tileType}
      />
      <Style.TileFooter>
        <Style.TileFooterTitle>{title}</Style.TileFooterTitle>
      </Style.TileFooter>
    </Style.TileWrapper>
  );
};

Tile.propTypes = {
  /**
   * URL to tile image
   */
  imageURL: PropTypes.string,
  /**
   * The size of the tile displayed
   */
  tileSize: PropTypes.oneOf(["medium", "large"]),
  /**
   * The shape of the tile displayed
   */
  tileType: PropTypes.oneOf(["square", "rectangle"]),
  /**
   * Title of tile
   */
  title: PropTypes.string,
};

export default Tile;
