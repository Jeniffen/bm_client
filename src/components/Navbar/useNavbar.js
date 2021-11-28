import { useState } from 'react';

export default function useNavbar() {
  const [itemStatus, setItemStatus] = useState({
    explore: true,
    wishlist: false,
    login: false,
  });

  const onItemSelect = (activeItem) => {
    const selectedItem = Object.keys(itemStatus).reduce((acc, key) => {
      acc[key] = key === activeItem;
      return acc;
    }, {});

    setItemStatus(selectedItem);
  };
  return [itemStatus, onItemSelect];
}
