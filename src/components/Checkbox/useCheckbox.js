import { useState } from 'react';

export default function useCheckbox() {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return [checked, handleCheckboxChange];
}
