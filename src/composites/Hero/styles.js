import styled from 'styled-components';

const HeroWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  height: 80vh;
  width: 100%;
`;

const HeroImage = styled.div`
  /* Default styles */
  /* box model */
  box-sizing: border-box;
  height: 75vh;
  width: 100%;

  /* background */
  background: url(${({ imageURL }) => imageURL}) no-repeat;
  background-size: 325%;
  background-position: 50% 95%;

  /* layout  */
  position: relative;

  /* Media query order matters */
  /* iPads, Tablets */
  @media all and (min-width: 30rem) {
    background-size: 210%;
    background-position: 45% 90%;
  }

  /* Small screens, laptops */
  @media all and (min-width: 48rem) {
    background-size: 210%;
    background-position: 45% 90%;
  }

  /* Tilted small screens phones */
  @media all and (orientation: landscape) {
    background-size: 110%;
    background-position: 30% 50%;
  }

  /* Desktops, large screens */
  @media all and (min-width: 64rem) {
    background-size: 200%;
    background-position: 45% 100%;
  }

  /* Tilted tablet */
  @media all and (min-width: 64rem) and (orientation: landscape) {
    background-size: 110%;
    background-position: 30% 90%;
  }

  /* Extra large screens, TV */
  @media all and (min-width: 75rem) {
    background-size: 110%;
    background-position: 45% 90%;
  }

  /* UHD Screens and beyond */
  @media all and (min-width: 128rem) {
    background-size: 100%;
    background-position: 45% 45%;
  }
`;

const Wrapper = ({ imageURL, children }) => (
  <HeroWrapper>
    <HeroImage imageURL={imageURL}>{children}</HeroImage>
  </HeroWrapper>
);

const Style = {
  Wrapper,
};
export default Style;
