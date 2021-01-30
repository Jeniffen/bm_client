import { useState, useRef, useEffect } from "react";

export default function useToggle({
  initialValue = false,
  onHideToggle = null,
}) {
  const refParent = useRef();
  const [toggleValue, setToggleValue] = useState(initialValue);

  const handleToggle = () => {
    setToggleValue((toggleValue) => !toggleValue);
  };

  const handleUserEvent = (e) => {
    if (!refParent.current.contains(e.target) || e.key === "Escape") {
      setToggleValue(false);
      if (onHideToggle !== null) {
        onHideToggle();
      }
    }
  };

  useEffect(() => {
    if (toggleValue) {
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
  }, [toggleValue]);

  return [refParent, toggleValue, handleToggle];
}
