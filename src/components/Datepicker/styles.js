import styled from "styled-components";
import DayPicker from "react-day-picker";
import { IconButton } from "../IconButton";

const NavDate = styled(IconButton)`
  :focus {
    border: none;
    background-color: #fff;
  }
`;

export const DateRangePicker = styled(DayPicker)`
  * {
    outline: none !important;
  }

  outline: none !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif !important;

  &.DayPicker {
    font-size: 14px;
    font-weight: 500;
    max-height: 480px;
  }

  .DayPicker-wrapper {
    display: flex;
    background-color: #fff;
    border-radius: 24px;
    padding: 8px;
    width: 850px;
    max-height: 460px;
    justify-content: center;
    box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.15),
      0px 3px 8px rgba(0, 0, 0, 0.1);
  }

  .DayPicker-NavBar {
    position: absolute;
    width: 90%;
    padding: 32px 0;
    margin: 0 42px;

    .MonthsNav-Left {
      float: left;
    }

    .MonthsNav-Right {
      float: right;
    }
  }

  .DayPicker-Caption {
    text-align: center;
  }

  .DayPicker-Caption > div {
    padding-bottom: 20px;
    color: #222222;
    font-size: 14px;
    font-weight: 600;
  }

  .DayPicker-Months {
    display: flex;
    width: 100%;
    padding: 20px 0;
    flex-wrap: nowrap;
    justify-content: space-evenly !important;
  }

  .DayPicker-Day {
    transition: font-weight 0.2s ease;
    padding: 6px;
    margin: 2px;
    width: 48px;
    height: 48px;
    color: #222222;
  }

  .DayPicker-Day--today {
    color: inherit;
    font-weight: inherit;
  }
  .DayPicker-Day--disabled {
    color: #dce0e0 !important;
    cursor: default;
    /* background-color: #eff1f1; */
  }

  &.DayPicker {
    &:not(.DayPicker--interactionDisabled) .DayPicker-Day {
      &:not(.DayPicker-Day--disabled) {
        &:not(.DayPicker-Day--selected) {
          :not(.DayPicker-Day--outside):hover {
            background-color: rgba(228, 57, 145, 0.8) !important;
            color: #fff;
          }
        }
      }
    }
  }

  .DayPicker-Day--selected {
    &:not(.DayPicker-Day--disabled) {
      &:not(.DayPicker-Day--outside) {
        outline: none;
        background-color: #e43991;
        font-weight: 600;
        color: #fff;
      }
    }
  }

  &.Range .DayPicker-Day--selected {
    &:not(.DayPicker-Day--start) {
      :not(.DayPicker-Day--end) {
        :not(.DayPicker-Day--outside) {
          transition: font-weight 0.5s ease;
          color: #d53f8c;
          font-weight: 800;
          background-color: transparent;
        }
      }
    }
  }
`;

export default { NavDate, DateRangePicker };
