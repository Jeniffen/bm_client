import styled from 'styled-components';

const HeroWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  height: 80vh;
  width: 100%;
`;

const HeroImage = styled.div`
  /* Extra-small devices */
  @media only screen and (max-width: 479px) {
    background-size: 317%;
    background-position: 45% 100%;
  }

  /* Small devices */
  @media screen and (min-width: 480px) and (max-width: 767px) {
    background-size: 210%;
    background-position: 45% 90%;
  }

  /* Medium devices */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    background-size: 200%;
    background-position: 40% 90%;
  }

  /* Large/extra large devices */
  @media only screen and (min-width: 1024px) {
    background-size: 120%;
    background-position: 40% 100%;
  }

  box-sizing: border-box;
  position: relative;

  background: url(${({ imageURL }) => imageURL}) no-repeat;

  height: 75vh;
  width: 100%;
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
