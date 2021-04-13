import { useState } from 'react';

export default function useInput({ register = null, type = null }) {
  const { name } = register;
  const [showLabel, setShowLabel] = useState(false);
  const [showPassword, setShowPassword] = useState({
    toggle: false,
    inputType: 'password',
    label: 'Show',
  });

  // Control password switch in input field
  const inputType = type === 'password' ? showPassword.inputType : type;

  const handleTogglePassword = () => {
    setShowPassword({
      toggle: !showPassword.toggle,
      inputType: showPassword.toggle ? 'password' : 'text',
      label: showPassword.toggle ? 'Show' : 'Hide',
    });
  };

  // Control input label behaviour in input field
  const inputDomNode = name === null || name === undefined ? 0 : name;
  const domElement = document.getElementsByClassName('complexInput');

  // This function controls the label within in the input field. If not present
  // input label will cover typed input text on blur. Correct functionality is
  // only ensured in conjunction wiht react-hook-forms.
  const handleInputChange = () => {
    domElement[inputDomNode].value === undefined ||
    domElement[inputDomNode].value === ''
      ? setShowLabel(false)
      : setShowLabel(true);
  };
  return [
    inputType,
    showLabel,
    handleInputChange,
    showPassword,
    handleTogglePassword,
  ];
}
