import React, { forwardRef, useImperativeHandle } from "react";
import PropTypes from "prop-types";
import Style from "./styles";
import useDateRangePicker from "../../hooks/useDateRangePicker";
import "react-day-picker/lib/style.css";

const DatePicker = forwardRef(
  ({ refDatepicker, stateParent, setStateCallback, className }, ref) => {
    const [
      initMonth,
      modifiers,
      disabledDays,
      selectedDays,
      handleDayClick,
      handleDayMouseEnter,
      handleResetClick,
    ] = useDateRangePicker({ stateParent, setStateCallback });

    useImperativeHandle(ref, () => ({
      handleResetClick,
    }));

    const MonthsNavbar = ({ onPreviousClick, onNextClick, className }) => {
      return (
        <div className={className}>
          <Style.NavDate
            type="button"
            onClick={() => onPreviousClick()}
            className="MonthsNav-Left"
            size="x-small"
            iconType="chevron-left"
          />
          <Style.NavDate
            type="button"
            onClick={() => onNextClick()}
            className="MonthsNav-Right"
            size="x-small"
            iconType="chevron-right"
          />
        </div>
      );
    };

    return (
      <div ref={refDatepicker}>
        <Style.DateRangePicker
          className={`Range ${className}`}
          numberOfMonths={2}
          initialMonth={initMonth}
          selectedDays={selectedDays}
          disabledDays={disabledDays}
          modifiers={modifiers}
          onDayClick={handleDayClick}
          onDayMouseEnter={handleDayMouseEnter}
          navbarElement={<MonthsNavbar />}
        />
      </div>
    );
  }
);

DatePicker.propTypes = {
  /**
   * Ref element of datepicker in order to attach toggle event listener
   */
  refDatepicker: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  /**
   * Parent state object for making selection available for parent component
   */
  stateParent: PropTypes.object.isRequired,
  /**
   * Callback function from parent in order to set selection as state
   */
  setStateCallback: PropTypes.func,
  /**
   * ClassName of element
   */
  className: PropTypes.string,
};

export default DatePicker;
