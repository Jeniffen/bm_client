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

  const onItemSelect = (activeItem) => {
    const selectedItem = Object.keys(itemStatus).reduce((acc, key) => {
      acc[key] = key === activeItem;
      return acc;
    }, {});

    setItemStatus(selectedItem);
  };

  return [isHidden, itemStatus, onItemSelect];
};

export default useNavbar;
