import styled from 'styled-components';

const CarousellContainer = styled.div`
  padding: 2rem 0;
`;
const HeaderContainer = styled.div`
  margin: 0 1.5rem;
  display: flex;
  justify-content: start;
`;

const Header = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: 2rem;
  font-weight: 500;
  font-size: 1.5rem;
  color: #222222;
`;

const Carousell = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-snap-align: start;
  scroll-padding: 0.5rem;

  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }

  :nth-child(n) > * {
    padding-left: 1rem;
    flex: 0 0 calc((100vw - 2.5rem) / 1.66);
  }

  :nth-child(n) > :first-child {
    padding-left: 1.5rem;
    flex: 0 0 calc((100vw - 2.5rem) / 1.66 + 0.5rem);
  }

  :nth-child(n) > :last-child {
    padding-right: 1.5rem;
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
