import styled from 'styled-components';

const ExploreContainer = styled.div`
  /* Desktops, large screens */
  @media (max-width: 46rem) {
    max-width: calc(100vw - 3rem);
  }
  border-radius: 0.75rem;

  margin: 1.5rem auto 0 auto;
  background-color: #000000;
  display: flex;
  flex-direction: column;
`;

const ExploreWrapper = styled.div`
  /* Default styles */
  /* box model */
  padding: 2rem;
  min-height: calc((100vw - 3rem) / 0.75);
`;

const Style = { ExploreContainer, ExploreWrapper };
export default Style;
