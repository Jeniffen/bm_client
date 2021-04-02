import React from 'react';
import Style from './styles';
import { DialogHeader } from '../DialogHeader';
import { FormMailSignUp } from '../../Forms/FormMailSignUp';

const DialogContainer = ({ headerTitle, children }) => {
  return (
    <Style.DialogContainer>
      <DialogHeader headerTitle={headerTitle} />
      <Style.DialogBody>
        <FormMailSignUp />
      </Style.DialogBody>
    </Style.DialogContainer>
  );
};

export default DialogContainer;
