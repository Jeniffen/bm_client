import React from "react";
import PropTypes from "prop-types";
import Style from "./styles";

const SearchButton = ({ expand, className }) => {
  return (
    <Style.Button className={`SearchButton ${className}`} expand={expand}>
      <Style.Icon
        className="SearchButton-Icon"
        type="magnifier"
        size="x-small"
      />
      <Style.Label className="SearchButton-Label">Search</Style.Label>
    </Style.Button>
  );
};

SearchButton.propTypes = {
  /**
   * Boolean to determine if button should be expanded to show text-label
   */
  expand: PropTypes.bool,
  /**
   * ClassName of element
   */
  className: PropTypes.string,
};

export default SearchButton;
