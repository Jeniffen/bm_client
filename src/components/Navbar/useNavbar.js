import { useState } from 'react';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const useNavbar = () => {
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const [heightMarker, setHeightMarker] = useState(0);
  const [itemStatus, setItemStatus] = useState({
    explore: true,
    wishlist: false,
    login: false,
  });

  const hideBar = (currPosY) => {
    setHideOnScroll(true);
    setHeightMarker(currPosY);
  };

  const showBar = (currPosY) => {
    setHideOnScroll(false);
    setHeightMarker(currPosY);
  };

  const scrollThreshold = 45;
  useScrollPosition(
    ({ currPos }) => {
      // Always show at top of page
      if (currPos.y > -scrollThreshold) {
        setTimeout(setHideOnScroll(false), 100);
        // Hide when scrolling down
      } else if (currPos.y <= heightMarker - scrollThreshold) {
        setTimeout(hideBar(currPos.y), 100);
        // Show when scrolling up
      } else if (currPos.y >= heightMarker + scrollThreshold) {
        setTimeout(showBar(currPos.y), 100);
      }
    },
    [hideOnScroll]
  );

  const onItemSelect = (activeItem) => {
    const selectedItem = Object.keys(itemStatus).reduce((acc, key) => {
      acc[key] = key === activeItem;
      return acc;
    }, {});

    setItemStatus(selectedItem);
  };

  return [hideOnScroll, itemStatus, onItemSelect];
};

export default useNavbar;
