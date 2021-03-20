import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';

const MenuItem = ({ weight, text, divider, onClick }) => {
  return (
    <>
      <Style.ItemLink weight={weight} onClick={onClick}>
        {text}
      </Style.ItemLink>
      {divider ? <Style.Separator /> : null}
    </>
  );
};

MenuItem.propTypes = {
  /**
   * Font weight that will be display
   */
  weight: PropTypes.oneOf(['light', 'medium', 'bold']),
  /**
   * Link text that will be shown
   */
  text: PropTypes.string,
  /**
   * Indication if divider will be shown after item
   */
  divider: PropTypes.bool,
  /**
   * Callback functions to be executed onClick
   */
  onClick: PropTypes.func,
};

export default MenuItem;
