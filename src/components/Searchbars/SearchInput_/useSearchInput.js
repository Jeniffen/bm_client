import { useState, useEffect, useRef } from "react";

export default function useSearchInput({ isSearchbarFolded = null }) {
  const inputSearch = useRef();
  const [inputValue, setValue] = useState("");

  useEffect(() => {
    if (isSearchbarFolded) inputSearch.current.blur();
  }, [isSearchbarFolded]);

  const handleChange = (e) => {
    e.persist();
    setValue((value) => e.target.value);
  };

  const handleClear = () => {
    setValue("");
    inputSearch.current.focus();
  };

  return [inputSearch, inputValue, handleChange, handleClear];
}
