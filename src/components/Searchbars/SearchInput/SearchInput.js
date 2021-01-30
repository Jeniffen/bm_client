import React from "react";
import PropTypes from "prop-types";
import Style from "./styles";
import useSearchInput from "./useSearchInput";

const SearchInput = ({
  inputLabel,
  inputPlaceholder,
  isSearch,
  divider,
  isSearchbarFolded,
  className,
}) => {
  const [inputSearch, inputValue, handleChange, handleClear] = useSearchInput({
    isSearchbarFolded,
  });

  return (
    <>
      <Style.Wrapper
        id="searchInputWrapper"
        inputState={inputValue}
        className={className}
      >
        <Style.InputWrapper id="searchinputInputWrapper">
          <Style.Label id="searchinputLabel">{inputLabel}</Style.Label>
          <Style.Input
            id="inputSearchData"
            ref={inputSearch}
            placeholder={inputPlaceholder}
            value={isSearchbarFolded ? "" : inputValue}
            autocomplete="off"
            onChange={handleChange}
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
              <Style.ExtendedSearchButton className="searchinputSearchButton" />
            ) : null}
          </Style.ButtonContainer>
        </Style.InputWrapper>
      </Style.Wrapper>
      {divider ? <Style.VSeparator id="searchbarSeparator" /> : null}
    </>
  );
};

SearchInput.propTypes = {
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

export default SearchInput;
