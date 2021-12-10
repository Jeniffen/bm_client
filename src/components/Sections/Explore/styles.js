import styled from 'styled-components';
import { Button } from '../../Button';

const ParentContainer = styled.div`
  /* Until small screens, laptops only */
  @media all and (max-width: 46rem) {
    /* box model */
    width: calc(100vw - 3rem);
    margin: 1.5rem auto;
  }
  max-width: calc(46rem - 3rem);

  /* background */
  background: rgb(255, 255, 255);
`;

const ChildContainer = styled.div`
  /* small sized Phones only */
  @media all and (max-width: 23.375rem) {
    /* box model */
    height: calc((100vw - 3rem) / (2 / 3));
  }

  /* box model */
  height: calc((100vw - 3rem) / 0.75);
  max-height: calc((46rem - 3rem) / 0.75);
  border-radius: 0.75rem;

  /* layout  */
  position: relative;
  overflow: hidden;
`;

const ContainerWrapper = styled.div`
  /* box model */
  width: 100%;
  height: 100%;

  /* background */
  background: rgba(210, 199, 208, 1) 50%;

  /* layout  */
  position: absolute;
  display: flex;
  flex-direction: column;
`;

const ExploreImage = styled.div`
  /* small sized Phones only */
  @media all and (max-width: 23.375rem) {
    /* background */
    background-size: 115%;
    background-position: 80% 0%;
  }

  /* box model */
  width: 100%;
  height: 50%;

  /* background */
  background: url(${(props) => props.imageURL}) no-repeat;
  background-size: 110%;
  background-position: 100% 0%;
`;

const ImageOverlay = styled.div`
  /* box model */
  width: 100%;
  height: 100%;

  /* background */
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 50%,
    rgba(210, 199, 208, 1) 100%
  );
`;

const ExploreCallToAction = styled.div`
  /* box model */
  width: 100%;
  height: 50%;
  padding: 2rem;
  margin: 0 auto;

  /* layout  */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const ExploreCallToActionText = styled.div`
  /* box model */
  width: 13rem;

  /* typography */
  font-size: 2rem;
  font-weight: 600;
  line-height: 2.2rem;
  letter-spacing: -0.05rem;
  text-align: center;
  white-space: pre-line;
`;

const ExploreButton = styled(Button)`
  /* box model */
  margin-top: 2rem;
  border: none;

  /* background */
  background-color: #222222;

  /* typography */
  color: #ffffff;
  font-size: 16px;

  :hover {
    border: none;
  }
`;

const Container = ({ children, className }) => {
  return (
    <ParentContainer>
      <ChildContainer>
        <ContainerWrapper>{children}</ContainerWrapper>
      </ChildContainer>
    </ParentContainer>
  );
};

const Image = ({ imageURL }) => {
  return (
    <ExploreImage imageURL={imageURL}>
      <ImageOverlay />
    </ExploreImage>
  );
};

const Style = {
  Container,
  Image,
  ExploreCallToAction,
  ExploreCallToActionText,
  ExploreButton,
};
export default Style;
