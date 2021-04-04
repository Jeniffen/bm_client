import { useState } from 'react';

export default function useInput({ name = null }) {
  const [showLabel, setShowLabel] = useState(false);
  const inputDomNode = name !== null && name !== undefined ? 0 : name;

  const handleInputChange = () => {
    document.getElementsByClassName('primary inputField')[inputDomNode]
      .value === undefined
      ? setShowLabel(false)
      : setShowLabel(true);
  };
  return [showLabel, handleInputChange];
}
