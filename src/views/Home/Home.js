import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Searchbar } from '../../components/Searchbar';
import { Hero } from '../../components/Hero';
import { Carousell } from '../../components/Carousell';
import { Tile } from '../../components/Tile';

const Home = () => {
  const heroContent = {
    key: 1,
    imageURL: 'https://bit.ly/3xLNERA',
    heroTagline: 'THIS IS \nYOUR DAY',
  };
  const searchDialogLabel = 'What are you looking for?';
  const carouselllHeader = 'Explore services for your event';
  const carousellContent = [
    { key: 1, imageURL: 'https://bit.ly/3EhYqSc', label: 'Photography' },
    { key: 2, imageURL: 'https://bit.ly/3Dv2Rbb', label: 'Makeup Artists' },
    { key: 3, imageURL: 'https://bit.ly/3lypvZL', label: 'Venues' },
  ];

  return (
    <>
      <Navbar />
      <Searchbar isSolid={false} searchDialogLabel={searchDialogLabel} />
      <Hero
        imageURL={heroContent.imageURL}
        heroTagline={heroContent.heroTagline}
      />
      <Carousell
        Element={Tile}
        header={carouselllHeader}
        content={carousellContent}
      />
    </>
  );
};

export default Home;
