import React from 'react';
import { DialogContainer } from '../../DialogContainer';
import { FormOAuth } from '../../../Forms/FormOAuth';

const DialogOAuth = () => {
  const headerTitle = 'Log in';

  return (
    <DialogContainer headerTitle={headerTitle}>
      <FormOAuth
        size={'extra-large'}
        dropdownType={'Country/Region'}
        inputPlaceholder={'Phone number'}
        headerTitle={'Log in'}
        footerText={'Don’t have an account?'}
        anchorText={'Sign up'}
      />
    </DialogContainer>
  );
};

export default DialogOAuth;
