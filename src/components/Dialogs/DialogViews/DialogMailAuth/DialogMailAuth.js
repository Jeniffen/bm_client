import React from 'react';
import { DialogContainer } from '../../DialogContainer';
import { FormMailSignUp } from '../../../Forms/FormMailSignUp';

const DialogMailAuth = () => {
  return (
    <DialogContainer headerTitle={'Finish signing up'}>
      <FormMailSignUp />
    </DialogContainer>
  );
};

export default DialogMailAuth;
