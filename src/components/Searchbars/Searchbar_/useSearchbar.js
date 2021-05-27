import { useState, useEffect } from "react";

export default function useSearchbar({ expandBar = null, wrapBar = null }) {
  const [isSearchbarFolded, setIsSearchbarFolded] = useState(false);

  useEffect(() => {
    !expandBar && wrapBar
      ? setIsSearchbarFolded(true)
      : setIsSearchbarFolded(false);
  }, [expandBar, wrapBar]);

  return [isSearchbarFolded];
}
