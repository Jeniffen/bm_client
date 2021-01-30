import React from "react";
import PropTypes from "prop-types";
import Style from "./styles";
import useSearchDatepicker from "./useSearchDatepicker";

const SearchDatepicker = ({
  inputLabel,
  inputPlaceholder,
  isSearch,
  divider,
  isSearchbarFolded,
  className,
}) => {
  const [
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
  ] = useSearchDatepicker({ isSearchbarFolded });

  return (
    <>
      <Style.Wrapper
        ref={refWrapper}
        id="searchDatepickerWrapper"
        inputState={dateInput.from}
        className={className}
      >
        <Style.InputWrapper id="searchinputInputWrapper">
          <Style.Label id="searchinputLabel">{inputLabel}</Style.Label>
          <Style.Input
            id="inputDateData"
            ref={inputDate}
            placeholder={inputPlaceholder}
            value={value}
            onClick={handleClick}
            autocomplete="off"
            readOnly
          />
          <Style.ButtonContainer id="searchinputButtonContainer">
            <Style.ClearButton
              className="clearBtn"
              type="button"
              iconType="close"
              onClick={handleClear}
              size="x-small"
            />
            {isSearch ? (
              <Style.ExtendedSearchButton className="searchinputDateButton" />
            ) : null}
          </Style.ButtonContainer>
        </Style.InputWrapper>
        {showToggle ? (
          <Style.SearchDatePicker
            refDatepicker={refToggleElement}
            ref={refReset}
            stateParent={dateInput}
            setStateCallback={setDateInput}
          />
        ) : null}
      </Style.Wrapper>
      {divider ? <Style.VSeparator id="searchbarSeparator" /> : null}
    </>
  );
};

SearchDatepicker.propTypes = {
  /**
   * Label at the top of the input-field, describing the type of input required
   */
  inputLabel: PropTypes.string,
  /**
   * Placeholder value of input-field
   */
  inputPlaceholder: PropTypes.string,
  /**
   * Boolean to determine if input-field should include search button
   */
  isSearch: PropTypes.bool,
  /**
   * Indication if divider will be shown after item
   */
  divider: PropTypes.bool,
  /**
   * Indication if parent searchbar is folded or expanded
   */
  isSearchbarFolded: PropTypes.bool,
  /**
   * ClassName of element
   */
  className: PropTypes.string,
};

export default SearchDatepicker;
