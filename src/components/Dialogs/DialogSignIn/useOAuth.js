import { useState, useEffect } from 'react';
import io from 'socket.io-client';

export default function useOAuth({ API_URL = null, providers = null }) {
  const [user, setUser] = useState({});
  const socket = io(API_URL, { transports: ['websocket'] });

  useEffect(() => {
    providers.map((authProvider) =>
      socket.on(authProvider, (user) => setUser(user))
    );
  }, []);

  const openPopup = (provider) => {
    const width = 600;
    const height = 600;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;
    const url = `${API_URL}/api/auth/${provider}?socketId=${socket.id}`;

    return window.open(
      url,
      '',
      `toolbar=no, location=no, directories=no, status=no, menubar=no,
    scrollbars=no, resizable=no, copyhistory=no, width=${width},
    height=${height}, top=${top}, left=${left}`
    );
  };

  return [openPopup, user];
}
