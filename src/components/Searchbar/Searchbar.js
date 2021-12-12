import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';

import useSearchbar from './useSearchbar';

const Searcbhar = ({ isSolid, searchDialogLabel, className }) => {
  const [wrapSearchbar] = useSearchbar();

  return (
    <Style.SearchContainer isSolid={wrapSearchbar} className={className}>
      <Style.Dialog
        isSolid={wrapSearchbar}
        searchDialogLabel={searchDialogLabel}
      />
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
