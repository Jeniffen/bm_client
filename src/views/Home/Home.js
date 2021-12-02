import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Searchbar } from '../../components/Searchbar';
import { Hero } from '../../components/Hero';
import { Tile } from '../../components/Tile';

const Home = () => {
  const heroContent = {
    key: 1,
    imageURL:
      'https://images.unsplash.com/photo-1587271511223-18b7ef9a327a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80',
    heroTagline: 'THIS IS \nYOUR DAY',
  };
  const searchDialogLabel = 'What are you looking for?';

  return (
    <>
      <Navbar />
      <Searchbar isSolid={false} searchDialogLabel={searchDialogLabel} />
      <Hero
        imageURL={heroContent.imageURL}
        heroTagline={heroContent.heroTagline}
      />
      <Tile
        imageURL="https://images.squarespace-cdn.com/content/v1/5292682ae4b00ad10e7441b7/1507314872432-RWB4KXY0N83UDLQX21GX/toronto-best-wedding-photographer-014.JPG?format=1500w"
        label="Photography"
      />
    </>
  );
};

export default Home;
