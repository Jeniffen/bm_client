import { useEffect } from 'react';
import authService from '../../../api/authService';

export default function useOAuth({ providers = null, onHeaderClose = null }) {
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

  let popup = null;
  const socket = authService.socket;

  useEffect(() => {
    socialAuth.map(({ provider }) =>
      socket.on(provider, () => {
        popup.close();
        onHeaderClose();
        window.location.reload();
      })
    );
  }, []);

  const openPopup = (provider) => {
    const width = 600;
    const height = 600;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;
    const url = `${authService.api[provider]}?socketId=${socket.id}`;

    popup = window.open(
      url,
      '',
      `toolbar=no, location=no, directories=no, status=no, menubar=no,
      scrollbars=no, resizable=no, copyhistory=no, width=${width},
      height=${height}, top=${top}, left=${left}`
    );
    return;
  };

  return [socialAuth, openPopup];
}
