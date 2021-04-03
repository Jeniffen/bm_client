import { useEffect } from 'react';
import authService from '../../../api/authService';

export default function useOAuth({
  onHeaderClose = null,
  handleMailAuth = null,
}) {
  // Initialize popup in order to able to close with JS
  let popup = null;
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

  const socialAuth = [
    {
      key: 'mail',
      logo: 'mail',
      label: 'Continue with email',
      provider: 'mail',
      onClick: handleMailAuth,
    },
    {
      key: 'fb',
      logo: 'logo-facebook',
      label: 'Continue with Facebook',
      provider: 'facebook',
      onClick: () => openPopup('facebook'),
    },
    {
      key: 'googl',
      logo: 'logo-google',
      label: 'Continue with Google',
      provider: 'google',
      onClick: () => openPopup('google'),
    },
    {
      key: 'aapl',
      logo: 'logo-apple',
      label: 'Continue with Apple',
      provider: 'apple',
      onClick: () => openPopup('apple'),
    },
  ];

  const socket = authService.socket;
  useEffect(() => {
    socialAuth.slice(1).map(({ provider }) =>
      socket.on(provider, (authToken) => {
        popup.close();
        // onHeaderClose();
        authService.refresh(authToken);
      })
    );
  }, []);

  return [socialAuth];
}
