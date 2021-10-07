import styled from 'styled-components';
import { Heading } from '../../components/Heading';

export const CallToAction = styled.div`
  position: absolute;
  top: 50%;
`;

export const Header = styled(Heading)`
  line-height: 4em;
`;

const HeroWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  height: 80vh;
  width: 100%;
`;

const HeroImage = styled.div`
  box-sizing: border-box;
  position: relative;

  background: url(${({ imageURL }) => imageURL}) no-repeat;
  background-size: 317%;
  background-position: 45% 100%;

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
  CallToAction,
  Header,
};
export default Style;
