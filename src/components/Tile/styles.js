import styled from 'styled-components';

const ParentContainer = styled.div`
  /* box model */
  width: calc((100vw - 40px) / 1.66);
  max-width: 20rem;
`;

const TileContainer = styled.div`
  /* box model */
  min-height: min(calc(20rem * 1.66), calc((100vw - 40px)) / 1.33);
  padding-bottom: 66.66%;
  border-radius: 0.75rem;

  /* layout  */
  position: relative;
  overflow: hidden;
`;

const TileWrapper = styled.div`
  /* box model */
  width: 100%;
  height: 100%;

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
  background-color: #ffffff;
  background-image: url(${(props) => props.imageURL});
  background-position: center;
  background-size: cover;
`;

const TileLabel = styled.div`
  /* box model */
  width: 100%;
  height: 30%;
  padding: 1.25rem 1rem 1rem 1rem;

  /* background */
  background-color: #eb2f52;

  /* typography */
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: #ffffff;
`;

export const Container = ({ children }) => {
  return (
    <ParentContainer>
      <TileContainer>
        <TileWrapper>{children}</TileWrapper>
      </TileContainer>
    </ParentContainer>
  );
};

const Style = {
  Container,
  TileImage,
  TileLabel,
};
export default Style;
