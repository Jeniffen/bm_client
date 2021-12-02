import styled from 'styled-components';

const ParentContainer = styled.div`
  /* box model */
  width: calc((100vw - 40px) / 1.66);
  max-width: 20rem;

  /* Small screens, laptops */
  @media all and (min-width: 28rem) {
    width: calc((100vw - 72px) / 2.66);
  }
`;

const ChildContainer = styled.div`
  /* box model */
  min-height: min(calc(20rem * 1.66), calc((100vw - 40px)) / 1.33);
  padding-bottom: 66.66%;
  border-radius: 0.75rem;

  /* layout  */
  position: relative;
  overflow: hidden;

  /* Small screens, laptops */
  @media all and (min-width: 28rem) {
    min-height: min(calc(20rem * 1.66), calc((100vw - 72px)) / 1.99);
  }
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
  padding: 1.125rem 1rem 1rem 1rem;

  /* background */
  background-color: #eb2f52;

  /* typography */
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: #ffffff;

  /* Media query order matters */
  /* Medium sized Phones */
  @media all and (min-width: 20rem) {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
  /* Large Phones */
  @media all and (min-width: 25rem) {
    font-size: 1.375rem;
    line-height: 1.4rem;
  }
  /* iPads, Tablets */
  @media all and (min-width: 28rem) {
    font-size: 1.5rem;
    line-height: 1.75rem;
  }
`;

export const Container = ({ children }) => {
  return (
    <ParentContainer>
      <ChildContainer>
        <TileWrapper>{children}</TileWrapper>
      </ChildContainer>
    </ParentContainer>
  );
};

const Style = {
  Container,
  TileImage,
  TileLabel,
};
export default Style;
