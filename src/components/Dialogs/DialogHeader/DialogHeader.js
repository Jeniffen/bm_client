import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';
import { IconButton } from '../../IconButton';

const DialogHeader = ({ headerTitle, onHeaderClose }) => {
  return (
    <Style.HeaderWrapper>
      <IconButton onClick={onHeaderClose} size="x-small" iconType="close" />
      <h1>{headerTitle}</h1>
    </Style.HeaderWrapper>
  );
};

DialogHeader.propTypes = {
  /**
   * Text shown on dialog header as title
   */
  headerTitle: PropTypes.string.isRequired,
  /**
   * Callback to close dialog
   */
  onHeaderClose: PropTypes.func,
};

export default DialogHeader;
