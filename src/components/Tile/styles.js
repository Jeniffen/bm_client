import styled from 'styled-components';

const TileContainer = styled.div`
  /* box model */
  width: calc((100vw - 40px) / 1.66);
  max-width: 20rem;
  padding-bottom: 66.66%;
  border-radius: 0.75rem;

  /* background */
  background-color: #000000;

  /* layout  */
  position: relative;
  overflow: hidden;
`;

const TileWrapper = styled.div`
  /* box model */
  width: 100%;
  height: 100%;

  /* background */
  background-color: blue;

  /* layout  */
  position: absolute;
  display: flex;
  flex-direction: column;
`;

const TileImage = styled.div`
  /* box model */
  width: 100%;
  height: 70%;

  /* background */
  background-color: red;
`;

const TileLabel = styled.div`
  /* box model */
  width: 100%;
  height: 30%;

  /* background */
  background-color: green;
`;

export const Container = ({ children }) => {
  return (
    <TileContainer>
      <TileWrapper>{children}</TileWrapper>
    </TileContainer>
  );
};

const Style = {
  Container,
  TileImage,
  TileLabel,
};
export default Style;
