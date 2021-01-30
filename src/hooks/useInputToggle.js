import { useState, useRef, useEffect } from "react";

export default function useInputToggle({ refInputElement = null }) {
  const refToggleElement = useRef();
  const [showToggle, setshowToggle] = useState(false);

  const handleClick = () => {
    setshowToggle((showToggle) => !showToggle);
  };

  const handleEvent = (e) => {
    if (
      (!refToggleElement.current.contains(e.target) &&
        !refInputElement.current.contains(e.target)) ||
      e.key === "Escape"
    ) {
      handleClick();
      if (refInputElement !== null) {
        refInputElement.current.blur();
        refInputElement.current.querySelector("input").blur();
      }
    }
  };

  useEffect(() => {
    if (showToggle) {
      window.addEventListener("mousedown", handleEvent);
      window.addEventListener("keydown", handleEvent);
    } else {
      window.removeEventListener("mousedown", handleEvent);
      window.removeEventListener("keydown", handleEvent);
    }

    return () => {
      window.removeEventListener("mousedown", handleEvent);
      window.removeEventListener("keydown", handleEvent);
    };
  }, [showToggle]);

  return [refToggleElement, showToggle, setshowToggle, handleClick];
}
