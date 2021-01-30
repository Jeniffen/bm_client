import { useState, useEffect } from "react";
import { DateUtils } from "react-day-picker";

export default function useDateRangePicker({
  stateParent = { from: null, to: null },
  setStateCallback = null,
}) {
  const [from, setFrom] = useState(stateParent.from);
  const [to, setTo] = useState(stateParent.to);
  const [enteredTo, setEnteredTo] = useState(stateParent.to);

  useEffect(() => {
    if (setStateCallback !== null) {
      setStateCallback({
        from,
        to,
      });
    }
  }, [from, to, setStateCallback]);

  const initMonth =
    stateParent.from === null
      ? null
      : new Date(stateParent.from.getFullYear(), stateParent.from.getMonth());

  const isSelectingFirstDay = (from, to, day) => {
    const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
    const isRangeSelected = from && to;
    return !from || isBeforeFirstDay || isRangeSelected;
  };

  const handleDayClick = (day, modifiers = {}) => {
    if (modifiers.disabled) {
      return;
    }
    if (from && to && day >= from && day <= to) {
      handleResetClick();
      return;
    }
    if (isSelectingFirstDay(from, to, day)) {
      setFrom(day);
      setTo(null);
      setEnteredTo(null);
    } else {
      setTo(day);
      setEnteredTo(day);
    }
  };

  const handleDayMouseEnter = (day) => {
    if (!isSelectingFirstDay(from, to, day)) {
      setEnteredTo(day);
    }
  };

  const handleResetClick = () => {
    setFrom(null);
    setTo(null);
    setEnteredTo(null);
  };

  const modifiers = { start: from, end: enteredTo };
  const disabledDays = { before: new Date() };
  const selectedDays = [from, { from, to: enteredTo }];

  return [
    initMonth,
    modifiers,
    disabledDays,
    selectedDays,
    handleDayClick,
    handleDayMouseEnter,
    handleResetClick,
  ];
}
