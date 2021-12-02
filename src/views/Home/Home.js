import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Searchbar } from '../../components/Searchbar';
import { Hero } from '../../components/Hero';
import { Tile } from '../../components/Tile';

const Home = () => {
  const heroContent = {
    key: 1,
    imageURL: 'https://bit.ly/3xLNERA',
    heroTagline: 'THIS IS \nYOUR DAY',
  };
  const searchDialogLabel = 'What are you looking for?';

  const tileContent = [
    { key: 1, imageURL: 'https://bit.ly/3EhYqSc', label: 'Photography' },
    { key: 2, imageURL: 'https://bit.ly/3EhYqSc', label: 'Photography' },
    { key: 3, imageURL: 'https://bit.ly/3EhYqSc', label: 'Photography' },
  ];

  return (
    <>
      <Navbar />
      <Searchbar isSolid={false} searchDialogLabel={searchDialogLabel} />
      <Hero
        imageURL={heroContent.imageURL}
        heroTagline={heroContent.heroTagline}
      />
      <Tile imageURL={tileContent[1].imageURL} label={tileContent[1].label} />
    </>
  );
};

export default Home;
