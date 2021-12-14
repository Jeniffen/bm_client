import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';

import useSearchbar from './useSearchbar';

const Searcbhar = ({ isSolid, searchDialogLabel, className }) => {
  const [wrapSearchbar] = useSearchbar();
  const isWrapped = isSolid ? isSolid : wrapSearchbar;

  return (
    <Style.SearchContainer isSolid={isWrapped} className={className}>
      <Style.Dialog isSolid={isWrapped} searchDialogLabel={searchDialogLabel} />
    </Style.SearchContainer>
  );
};

Searcbhar.propTypes = {
  /**
   * Boolean indicating if Dialog is solid or transparent
   */
  isSolid: PropTypes.bool.isRequired,
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
