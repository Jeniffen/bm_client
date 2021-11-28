import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Searchbar } from '../../components/Searchbar';
import { Hero } from '../../components/Hero';

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
    </>
  );
};

export default Home;
