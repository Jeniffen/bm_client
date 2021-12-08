import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Searchbar } from '../../components/Searchbar';
import { Hero } from '../../components/Sections/Hero';
import { Carousell } from '../../components/Carousell';
import { Tile } from '../../components/Tile';
import { Explore } from '../../components/Sections/Explore';

import useHome from './useHome';

const Home = () => {
  const [
    heroContent,
    searchbarContent,
    carousellContent,
    exploreContent,
  ] = useHome();
  return (
    <>
      <Navbar />
      <Searchbar isSolid={false} searchDialogLabel={searchbarContent.label} />
      <Hero
        imageURL={heroContent.imageURL}
        heroTagline={heroContent.heroTagline}
      />
      <Carousell
        Element={Tile}
        header={carousellContent.header}
        content={carousellContent.elements}
      />
      <Explore imageURL={exploreContent.servicePartner.imageURL} />
    </>
  );
};

export default Home;
