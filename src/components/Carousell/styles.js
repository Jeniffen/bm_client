import styled from 'styled-components';

const CarousellContainer = styled.div`
  /* box model */
  padding: 2rem 0;
`;
const HeaderContainer = styled.div`
  /* box model */
  margin: 0 1.5rem;

  /* layout  */
  display: flex;
  justify-content: start;
`;

const Header = styled.h2`
  /* box model */
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: 2rem;

  /* typography */
  font-weight: 500;
  font-size: 1.5rem;
  color: #222222;
`;

const Carousell = styled.div`
  /* layout  */
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;

  /* other */
  scroll-padding: 0.5rem;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }

  :nth-child(n) > * {
    /* box model */
    padding-left: 1rem;
    /* layout  */
    flex: 0 0 calc((100vw - 2.5rem) / 1.66);

    /* other */
    scroll-snap-align: start;
  }

  :nth-child(n) > :first-child {
    /* box model */
    padding-left: 1.5rem;

    /* layout  */
    flex: 0 0 calc((100vw - 2.5rem) / 1.66 + 0.5rem);
  }

  :nth-child(n) > :last-child {
    /* box model */
    padding-right: 1.5rem;

    /* layout  */
    flex: 0 0 calc((100vw - 2.5rem) / 1.66 + 1.5rem);
  }
`;

export const CarousellHeader = ({ header, children }) => {
  return (
    <HeaderContainer>
      <Header>{header}</Header>
      {children}
    </HeaderContainer>
  );
};

const Style = {
  CarousellContainer,
  CarousellHeader,
  Carousell,
};
export default Style;
