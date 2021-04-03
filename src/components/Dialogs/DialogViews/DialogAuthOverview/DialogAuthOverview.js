import React from 'react';
import { DialogContainer } from '../../DialogContainer';
import { FormOAuth } from '../../../Forms/FormOAuth';
import { FormMailSignUp } from '../../../Forms/FormMailSignUp';
import useDialogAuthOverview from './useDialogAuthOverview';

const DialogOAuth = ({ dialogType }) => {
  const [
    view,
    headerTitle,
    footerText,
    anchorText,
    handleMailAuth,
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
  };

  return (
    <DialogContainer headerTitle={headerTitle}>
      {authDialog[view]}
    </DialogContainer>
  );
};

export default DialogOAuth;
