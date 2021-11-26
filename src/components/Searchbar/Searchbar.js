import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';

const Searcbhar = ({ isSolid, searchDialogLabel, className }) => {
  return (
    <Style.SearchContainer isSolid={isSolid} className={className}>
      <Style.Dialog isSolid={isSolid} searchDialogLabel={searchDialogLabel} />
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
