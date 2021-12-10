export default function useHome() {
  const heroContent = {
    key: 1,
    imageURL: 'https://bit.ly/3xLNERA',
    heroTagline: 'THIS IS \nYOUR DAY',
  };

  const searchbarContent = { label: 'What are you looking for?' };

  const carousellContent = {
    header: 'Explore services for your event',
    elements: [
      { key: 1, imageURL: 'https://bit.ly/3EhYqSc', label: 'Photography' },
      { key: 2, imageURL: 'https://bit.ly/3Dv2Rbb', label: 'Makeup Artists' },
      { key: 3, imageURL: 'https://bit.ly/3lypvZL', label: 'Venues' },
    ],
  };

  const exploreContent = {
    servicePartner: {
      imageURL: 'https://bit.ly/3dwyeHs',
      text: 'Become a service partner',
      buttonLabel: 'Learn more',
    },
  };

  return [heroContent, searchbarContent, carousellContent, exploreContent];
}
