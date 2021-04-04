import { useState } from 'react';

export default function useInput({ register = null }) {
  const [showLabel, setShowLabel] = useState(false);

  const { name } = { ...register };
  const inputDomNode = name === null || name === undefined ? 0 : name;

  // This function controls the label within in the input field.
  // Correct functionality is only ensured in conjunction wiht react-hook-forms.
  const handleInputChange = () => {
    document.getElementsByClassName('primary inputField')[inputDomNode]
      .value === undefined
      ? setShowLabel(false)
      : setShowLabel(true);
  };
  return [showLabel, handleInputChange];
}
