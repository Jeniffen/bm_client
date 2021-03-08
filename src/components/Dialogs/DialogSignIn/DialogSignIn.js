import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';
import { Button } from '../../Button';
import { Icons } from '../../Icons';
import { DialogHeader } from '../DialogHeader';
import { DialogFooter } from '../DialogFooter';
import { FormPhoneAuth } from '../../Forms/FormPhoneAuth';
import useOAuth from './useOAuth';

const DialogSignIn = ({
  headerTitle,
  onHeaderClose,
  footerText,
  anchorText,
  API_URL,
}) => {
  const [openPopup, user] = useOAuth({
    API_URL,
    providers: ['mail', 'facebook', 'google', 'apple'],
    onHeaderClose
  });

  const socialAuth = [
    {
      key: 'mail',
      logo: 'mail',
      label: 'Continue with email',
      provider: 'mail',
    },
    {
      key: 'fb',
      logo: 'logo-facebook',
      label: 'Continue with Facebook',
      provider: 'facebook',
    },
    {
      key: 'googl',
      logo: 'logo-google',
      label: 'Continue with Google',
      provider: 'google',
    },
    {
      key: 'aapl',
      logo: 'logo-apple',
      label: 'Continue with Apple',
      provider: 'apple',
    },
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
        {socialAuth.map(({ key, logo, label, provider }) => (
          <form key={key}>
            <Button
              key={key}
              btnType="secondary"
              type="button"
              size="extra-large"
              label={label}
              onClick={() => openPopup(provider)}
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
  /**
   * OAuth API URL
   */
  API_URL: PropTypes.string,
};

export default DialogSignIn;
