import React from 'react';
import Style from './styles';
import { DialogHeader } from '../DialogHeader';

const DialogContainer = ({ headerTitle, children }) => {
  return (
    <Style.DialogContainer>
      <DialogHeader headerTitle={headerTitle} />
      <Style.DialogBody>{children}</Style.DialogBody>
    </Style.DialogContainer>
  );
};

export default DialogContainer;
