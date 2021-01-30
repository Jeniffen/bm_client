import { useState, useEffect, useRef } from "react";
import useInputToggle from "../../../hooks/useInputToggle";
import moment from "moment";

export default function useSearchDatepicker({ isSearchbarFolded = null }) {
  const inputDate = useRef();
  const refWrapper = useRef();
  const refReset = useRef();

  const [value, setValue] = useState("");
  const [dateInput, setDateInput] = useState({ from: null, to: null });

  const [
    refToggleElement,
    showToggle,
    setshowToggle,
    handleClick,
  ] = useInputToggle({
    refInputElement: refWrapper,
  });

  useEffect(() => {
    const { from, to } = dateInput;
    const from_formatted = from === null ? "" : moment(from).format("MMM D");
    const to_formatted =
      to === null
        ? ""
        : moment(from).format("MMM") === moment(to).format("MMM")
        ? " - " + moment(to).format("D")
        : " - " + moment(to).format("MMM D");
    const dateOutput = from_formatted + to_formatted;

    setValue(dateOutput);
  }, [dateInput]);

  useEffect(() => {
    if (!showToggle) inputDate.current.blur();
  }, [showToggle]);

  useEffect(() => {
    if (isSearchbarFolded) setshowToggle(false);
  }, [isSearchbarFolded]);

  const handleClear = () => {
    setDateInput({ from: null, to: null });
    refReset.current.handleResetClick();
    inputDate.current.focus();
  };

  return [
    inputDate,
    refWrapper,
    refReset,
    refToggleElement,
    showToggle,
    value,
    dateInput,
    setDateInput,
    handleClick,
    handleClear,
  ];
}
