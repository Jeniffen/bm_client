import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';

const Searcbhar = ({ className }) => {
  return (
    <Style.SearchContainer className={className}>
      <Style.SearchDialog>
        <Style.Icon
          className="SearchButton-Icon"
          type="magnifier"
          size="x-small"
        />
        <Style.DialogLabel>What are you looking for?</Style.DialogLabel>
      </Style.SearchDialog>
    </Style.SearchContainer>
  );
};

Searcbhar.propTypes = {
  /**
   * ClassName of element
   */
  className: PropTypes.string,
};

export default Searcbhar;
