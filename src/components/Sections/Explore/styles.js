import styled from 'styled-components';

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
};
export default Style;
