import { useState, useRef, useEffect } from "react";
import { useScrollPosition } from "./useScrollPosition";

export default function useSearchbarControl({
  wrapBar = false,
  expandBar = false,
  wrapHeightRange = 65,
}) {
  const headerNode = useRef();
  const [barWrapped, setBarWrapped] = useState(wrapBar);
  const [barExpanded, setBarExpanded] = useState(expandBar);
  const [heightTrigger, setHeightTrigger] = useState(0);

  const hideBar = (currPosY) => {
    setBarWrapped(true);
    setBarExpanded(false);
    setHeightTrigger(currPosY);
  };

  const showBar = () => {
    setBarWrapped(false);
    setBarExpanded(true);
  };

  const handleUserEvent = (e) => {
    if (!headerNode.current.contains(e.target) | (e.key === "Escape")) {
      setBarExpanded(false);
    }
  };

  useEffect(() => {
    if (barExpanded) {
      window.addEventListener("mousedown", handleUserEvent);
      window.addEventListener("keydown", handleUserEvent);
    } else {
      window.removeEventListener("mousedown", handleUserEvent);
      window.removeEventListener("keydown", handleUserEvent);
    }

    return () => {
      window.removeEventListener("mousedown", handleUserEvent);
      window.removeEventListener("keydown", handleUserEvent);
    };
  }, [barExpanded]);

  useScrollPosition(
    ({ currPos }) => {
      // Show Searchbar on top of page
      if (currPos.y > -wrapHeightRange) {
        showBar();
        // Hide Searchbar on just exiting top
      } else if (
        currPos.y <= -wrapHeightRange &&
        currPos.y >= -wrapHeightRange * 2
      ) {
        setTimeout(hideBar(currPos.y), 100);
        // Hide Searchbar dynamically based on threshold
      } else if (
        currPos.y <= heightTrigger - wrapHeightRange ||
        currPos.y >= heightTrigger + wrapHeightRange
      ) {
        setTimeout(hideBar(currPos.y), 100);
      }
    },
    [barWrapped, heightTrigger]
  );

  return [headerNode, barExpanded, barWrapped, setBarExpanded];
}
