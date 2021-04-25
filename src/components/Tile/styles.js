import styled, { css } from 'styled-components';

const tileWidth = (tileSize) => {
  switch (tileSize) {
    case 'medium':
      return css`
        width: 30vw;
      `;
    case 'large':
      return 520;
    default:
      return 360;
  }
};

const tileHeight = (tileSize, tileType) => {
  switch (tileType) {
    case 'square':
      return tileWidth(tileSize);
    case 'rectangle':
      return tileWidth(tileSize) / 1.5;
    default:
      return tileWidth(tileSize);
  }
};

const TileWrapper = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  ${({ tileSize }) => tileWidth}
  background-color: transparent;

  :hover {
    cursor: pointer;
  }
`;

const TileImage = styled.div`
  border-radius: 12px;
  height: 18vw;
  width: 18vw;
  background-color: #fff;
  background-image: url(${(props) => props.imageURL});
  background-position: center;
  background-size: cover;
`;

const TileFooter = styled.div`
  display: flex;
  flex: 1 1 auto;
  background-color: transparent;
  align-items: center;
`;

const TileFooterTitle = styled.p`
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    'Helvetica Neue', sans-serif !important;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.025em;
  margin: 10px 0 0 0;
`;

const Style = { TileWrapper, TileImage, TileFooter, TileFooterTitle };
export default Style;
