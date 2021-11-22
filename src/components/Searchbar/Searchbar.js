import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';

const Searcbhar = ({ className }) => {
  return <Style.SearchContainer className={className}></Style.SearchContainer>;
};

Searcbhar.propTypes = {
  /**
   * ClassName of element
   */
  className: PropTypes.string,
};

export default Searcbhar;
