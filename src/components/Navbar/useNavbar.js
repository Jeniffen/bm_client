import { useState } from 'react';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const useNavbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [heightMarker, setHeightMarker] = useState(0);
  const [itemStatus, setItemStatus] = useState({
    explore: true,
    wishlist: false,
    login: false,
  });

  const hideBar = (currPosY) => {
    setIsHidden(true);
    setHeightMarker(currPosY);
  };
  const showBar = (currPosY) => {
    setIsHidden(false);
    setHeightMarker(currPosY);
  };
  const scrollThreshold = 45;
  useScrollPosition(
    ({ currPos }) => {
      // Always show at top of page
      if (currPos.y > -scrollThreshold) {
        setTimeout(setIsHidden(false), 100);
        // Hide when scrolling down
      } else if (currPos.y <= heightMarker - scrollThreshold) {
        setTimeout(hideBar(currPos.y), 100);
        // Show when scrolling up
      } else if (currPos.y >= heightMarker + scrollThreshold) {
        setTimeout(showBar(currPos.y), 100);
      }
    },
    [isHidden]
  );

  const NavbarElements = onItemSelect(itemStatus, setItemStatus);

  return [isHidden, NavbarElements];
};

/**
 * Function to handle Navbar Item selection
 *
 * @param {object} itemStatus - The title of the book.
 * @param {function} setItemStatus - The title of the book.
 *
 * @returns {array} Array of objects for Navbar elements
 */
const onItemSelect = (itemStatus, setItemStatus) => {
  const updateSelection = (activeItem) => {
    const selectedItem = Object.keys(itemStatus).reduce((acc, key) => {
      acc[key] = key === activeItem;
      return acc;
    }, {});

    setItemStatus(selectedItem);
  };

  const NavbarElements = [
    {
      key: 1,
      itemStatus: itemStatus.explore,
      icon: 'magnifier',
      label: 'Explore',
      onItemSelect: () => updateSelection('explore'),
      to: '/',
    },
    {
      key: 2,
      itemStatus: itemStatus.wishlist,
      icon: 'heart',
      label: 'Wishlist',
      onItemSelect: () => updateSelection('wishlist'),
      to: '/wishlist',
    },
    {
      key: 3,
      itemStatus: itemStatus.login,
      icon: 'avatar',
      label: 'Log in',
      onItemSelect: () => updateSelection('login'),
      to: '/login',
    },
  ];

  return NavbarElements;
};

export default useNavbar;
