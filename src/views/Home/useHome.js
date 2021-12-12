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

  const footerContent = {
    links: [
      {
        key: 1,
        section: 'Support',
        paths: [
          { key: 1, label: 'Frequently asked questions', href: '/Home' },
          { key: 2, label: 'Cancellation options', href: '/Home' },
          { key: 3, label: 'Report a service', href: '/Home' },
        ],
      },
      {
        key: 2,
        section: 'Offerings',
        paths: [{ key: 1, label: 'Become a service partner', href: '/Home' }],
      },
      {
        key: 3,
        section: 'About',
        paths: [
          { key: 1, label: 'How Namdin works', href: '/Home' },
          { key: 2, label: 'Our commitment', href: '/Home' },
        ],
      },
    ],
    meta: {
      copyright: '© 2021 Namdin',
    },
  };

  return [
    heroContent,
    searchbarContent,
    carousellContent,
    exploreContent,
    footerContent,
  ];
}
