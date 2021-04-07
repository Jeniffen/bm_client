import { useState } from 'react';

export default function useInput({ register = null }) {
  const { name } = register;
  const [showLabel, setShowLabel] = useState(false);

  const inputDomNode = name === null || name === undefined ? 0 : name;
  const domElement = document.getElementsByClassName('complexInput');

  // This function controls the label within in the input field.
  // Correct functionality is only ensured in conjunction wiht react-hook-forms.
  const handleInputChange = () => {
    domElement[inputDomNode].value === undefined ||
    domElement[inputDomNode].value === ''
      ? setShowLabel(false)
      : setShowLabel(true);
  };
  return [showLabel, handleInputChange];
}
