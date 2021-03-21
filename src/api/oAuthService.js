import io from 'socket.io-client';
import { API_URL } from '../config';

const socket = io(API_URL, { transports: ['websocket'] });

export default {
  socket: socket,

  api: {
    mail: `${API_URL}/api/auth/mail`,
    facebook: `${API_URL}/api/auth/facebook`,
    google: `${API_URL}/api/auth/google`,
    apple: `${API_URL}/api/auth/apple`,
  },
};
