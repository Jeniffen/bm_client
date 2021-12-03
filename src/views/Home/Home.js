import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Searchbar } from '../../components/Searchbar';
import { Hero } from '../../components/Hero';
import { Carousell } from '../../components/Carousell';

const Home = () => {
  const heroContent = {
    key: 1,
    imageURL: 'https://bit.ly/3xLNERA',
    heroTagline: 'THIS IS \nYOUR DAY',
  };
  const searchDialogLabel = 'What are you looking for?';
  const carousellHeader = 'Explore services for your event';

  return (
    <>
      <Navbar />
      <Searchbar isSolid={false} searchDialogLabel={searchDialogLabel} />
      <Hero
        imageURL={heroContent.imageURL}
        heroTagline={heroContent.heroTagline}
      />
      <Carousell header={carousellHeader} />
    </>
  );
};

export default Home;
