import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';
import { Button } from '../../Button';
import { Icons } from '../../Icons';
import { DialogHeader } from '../DialogHeader';
import { DialogFooter } from '../DialogFooter';
import { FormPhoneAuth } from '../../Forms/FormPhoneAuth';
import io from 'socket.io-client';
import useOAuth from './useOAuth';

const DialogSignIn = ({
  headerTitle,
  onHeaderClose,
  footerText,
  anchorText,
}) => {
  //TODO: Move parameters | Actually it should be PORT 5000
  // However utilizing http-proxy-middleware it can be changed to 3000
  // Allowing to use that same domain & port (Hacky - needs fix!)
  // + UPDATE: seems like this is causing issues with react router
  const API_URL = 'http://localhost:5000';
  const socket = io(API_URL, { transports: ['websocket'] });
  const provider = 'google';

  const [openPopup, user] = useOAuth({ API_URL, socket, provider });
  const socialAuth = [
    { key: 'mail', logo: 'mail', label: 'Continue with email' },
    { key: 'fb', logo: 'logo-facebook', label: 'Continue with Facebook' },
    { key: 'googl', logo: 'logo-google', label: 'Continue with Google' },
    { key: 'aapl', logo: 'logo-apple', label: 'Continue with Apple' },
  ];

  console.log(user);

  return (
    <Style.DialogContainer>
      <DialogHeader headerTitle={headerTitle} onHeaderClose={onHeaderClose} />
      <Style.DialogWrapper>
        <FormPhoneAuth
          size="extra-large"
          dropdownType="Country/Region"
          inputPlaceholder="Phone number"
        />
        <Style.DialogSeparator seperatorText="or" />
        {socialAuth.map(({ key, logo, label }) => (
          <form key={key}>
            <Button
              key={key}
              btnType="secondary"
              type="button"
              size="extra-large"
              label={label}
              onClick={openPopup}
              prefixIcon={<Icons type={logo} size="small" />}
            />
          </form>
        ))}
        <DialogFooter footerText={footerText} anchorText={anchorText} />
      </Style.DialogWrapper>
    </Style.DialogContainer>
  );
};

DialogSignIn.propTypes = {
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

export default DialogSignIn;
