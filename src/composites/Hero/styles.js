import styled from 'styled-components';

const HeroWrapper = styled.div`
  /* Default styles */
  /* box model */
  box-sizing: border-box;
  height: calc(1.3 * 100vw);
  width: 100%;

  /* background */
  background: url(${({ imageURL }) => imageURL}) no-repeat;
  background-size: 315vw;
  background-position: 50% 60%;

  /* layout  */
  position: relative;
  overflow: hidden;

  /* Media query order matters */
  /* iPads, Tablets */
  @media all and (min-width: 28rem) {
    background-size: 250%;
    background-position: 45% 100%;
  }

  /* Small screens, laptops */
  @media all and (min-width: 46rem) {
    height: calc(0.8 * 100vw);

    background-size: 150%;
    background-position: 45% 100%;
  }

  /* Desktops, large screens */
  @media all and (min-width: 62rem) {
    height: calc(0.5 * 100vw);

    background-size: 130%;
    background-position: 45% 75%;
  }

  /* Extra large screens, TV */
  @media all and (min-width: 73rem) {
    background-size: 110%;
    background-position: 45% 90%;
  }

  /* UHD Screens and beyond */
  @media all and (min-width: 126rem) {
    height: calc(0.4 * 100vw);

    background-size: 100%;
    background-position: 45% 45%;
  }
`;

const Style = {
  HeroWrapper,
};
export default Style;
