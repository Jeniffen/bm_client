import { useState } from 'react';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const useSearchbar = () => {
  const [wrapSearchbar, setWrapSearchbar] = useState(false);

  useScrollPosition(
    ({ currPos }) => {
      const isScrolling = currPos.y !== 0;
      if (isScrolling !== wrapSearchbar) setWrapSearchbar(isScrolling);
    },
    [wrapSearchbar]
  );

  return [wrapSearchbar];
};

export default useSearchbar;
