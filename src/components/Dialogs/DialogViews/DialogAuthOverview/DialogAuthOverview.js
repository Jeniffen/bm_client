import React from 'react';
import PropTypes from 'prop-types';
import { DialogContainer } from '../../DialogContainer';
import { FormOAuth } from '../../../Forms/FormOAuth';
import { FormMailSignUp } from '../../../Forms/FormMailSignUp';
import { FormMailLogin } from '../../../Forms/FormMailLogin';
import useDialogAuthOverview from './useDialogAuthOverview';

const DialogOAuth = ({ dialogType }) => {
  const [
    view,
    headerTitle,
    footerText,
    anchorText,
    handleMailAuth,
    handleOptions,
    handleAnchor,
  ] = useDialogAuthOverview({ dialogType });

  const authDialog = {
    overview: (
      <FormOAuth
        size={'extra-large'}
        dropdownType={'Country/Region'}
        inputPlaceholder={'Phone number'}
        footerText={footerText}
        anchorText={anchorText}
        handleMailAuth={handleMailAuth}
        handleAnchor={handleAnchor}
      />
    ),
    mailSignup: <FormMailSignUp />,
    mailLogin: (
      <FormMailLogin
        size={'extra-large'}
        inputPlaceholder={'Phone number'}
        footerText={footerText}
        anchorText={anchorText}
        handleOptions={handleOptions}
        handleAnchor={handleAnchor}
      />
    ),
  };

  return (
    <DialogContainer headerTitle={headerTitle}>
      {authDialog[view]}
    </DialogContainer>
  );
};

DialogOAuth.propTypes = {
  /**
   * Indicator if dialog is called for signin or login
   */
  type: PropTypes.oneOf(['signup', 'login']),
};

export default DialogOAuth;
