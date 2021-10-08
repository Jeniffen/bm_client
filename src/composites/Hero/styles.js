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
  background-size: 317%;
  background-position: 45% 100%;

  /* layout  */
  position: relative;

  @media all and (orientation: landscape) {
    background-size: 105%;
    background-position: 0% 45%;
  }

  /* Tablets*/
  @media all and (min-width: 48rem) and (orientation: portrait) {
    background-size: 210%;
    background-position: 45% 90%;
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
