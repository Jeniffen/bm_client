import { useState } from 'react';

export default function useInput() {
  const [showLabel, setShowLabel] = useState(false);

  const handleInputChange = () => {
    document.getElementsByClassName('primary inputField')[0].value === ''
      ? setShowLabel(false)
      : setShowLabel(true);
  };
  return [showLabel, handleInputChange];
}
