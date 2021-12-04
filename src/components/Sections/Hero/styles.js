import styled from 'styled-components';

const HeroTagline = styled.span`
  /* Layout */
  position: absolute;
  top: 60%;

  /* Typography */
  color: #ffffff;
  letter-spacing: -0.1rem;
  font-weight: 800;
  font-size: clamp(2.5rem, 17.5vw, 4rem);
  line-height: clamp(2.25rem, 14vw, 3.75rem);
  white-space: pre-wrap;

  /* Small screens, laptops */
  @media all and (min-width: 46rem) {
    font-size: 6rem;
    line-height: 5rem;
  }

  /* Extra large screens, TV */
  @media all and (min-width: 73rem) {
    font-size: 6rem;
    line-height: 5rem;
  }
`;

const HeroContent = styled.div`
  /* box model */
  height: 100%;
  width: 100%;
  padding: 96px 24px 32px 24px;

  /* background */
  background: linear-gradient(180deg, #ffffff00 31%, #dd4e89 100%);

  /* layout  */
  display: flex;
  align-items: center;
  justify-content: left;

  /* Small screens, laptops */
  @media all and (min-width: 46rem) {
    padding: 250px 40px 40px 40px;
  }
`;

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

    background-size: 145%;
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
  HeroContent,
  HeroTagline,
  HeroWrapper,
};
export default Style;
