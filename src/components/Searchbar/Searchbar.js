import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';

const Searcbhar = ({ isSolid, searchDialogLabel, className }) => {
  return (
    <Style.SearchContainer isSolid={isSolid} className={className}>
      <Style.SearchDialog isSolid={isSolid}>
        <Style.Icon
          className="SearchButton-Icon"
          type="magnifier"
          size="x-small"
        />
        <Style.DialogLabel>{searchDialogLabel}</Style.DialogLabel>
      </Style.SearchDialog>
    </Style.SearchContainer>
  );
};

Searcbhar.propTypes = {
  /**
   * Boolean indicating if Dialog is solid or transparent
   */
  isSolid: PropTypes.bool,
  /**
   * Label within Searchbar Dialog
   */
  searchDialogLabel: PropTypes.string,
  /**
   * ClassName of element
   */
  className: PropTypes.string,
};

export default Searcbhar;
