import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';
import { DialogHeader } from '../DialogHeader';
import { DialogFooter } from '../DialogFooter';
import { FormMailSignUp } from '../../Forms/FormMailSignUp';
import useOAuth from './useOAuth';

const DialogMailSignUp = ({
  headerTitle,
  onHeaderClose,
  footerText,
  anchorText,
}) => {
  const [socialAuth, openPopup] = useOAuth({ onHeaderClose });

  return (
    <Style.DialogContainer>
      <DialogHeader headerTitle={headerTitle} onHeaderClose={onHeaderClose} />
      <Style.DialogWrapper>
        <FormMailSignUp
          size="extra-large"
          dropdownType="Country/Region"
          inputPlaceholder="Phone number"
        />
        <DialogFooter footerText={footerText} anchorText={anchorText} />
      </Style.DialogWrapper>
    </Style.DialogContainer>
  );
};

DialogMailSignUp.propTypes = {
  /**
   * Text shown on dialog header as title
   */
  headerTitle: PropTypes.string.isRequired,
  /**
   * Callback to close dialog
   */
  onHeaderClose: PropTypes.func,
  /**
   * Plaintext shown in dialog footer
   */
  footerText: PropTypes.string.isRequired,
  /**
   * Anchor text shown in dialog footer
   */
  anchorText: PropTypes.string,
};

export default DialogMailSignUp;
