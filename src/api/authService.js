/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import io from 'socket.io-client';
import { API_URL } from '../config';

export default {
  socket: io(API_URL, { transports: ['websocket'] }),

  api: {
    mail: `${API_URL}/api/auth/mail`,
    facebook: `${API_URL}/api/auth/facebook`,
    google: `${API_URL}/api/auth/google`,
    apple: `${API_URL}/api/auth/apple`,
  },

  getCurrentUser: async (setState) => {
    try {
      const result = await axios.get(`${API_URL}/api/auth/current_user`, {
        withCredentials: true,
      });
      setState({ status: 'success', error: null, user: result.data });
    } catch (error) {
      setState({ status: 'error', error, user: null });
    }
  },

  refresh: async (authToken) => {
    await axios.get(`${API_URL}/api/auth/refresh`, {
      headers: { Authorization: `Bearer ${authToken}` },
      withCredentials: true,
    });
    window.location.reload();
  },

  getLogout: async () => {
    await axios.get(`${API_URL}/api/auth/logout`, { withCredentials: true });
    window.location.reload();
  },

  postMailSignUp: async (payload) => {
    try {
      return await axios.post(`${API_URL}/api/auth/mailsignup`, payload, {
        withCredentials: true,
      });
    } catch (e) {
      return e.response;
    }
  },

  postMailLogin: async (payload) => {
    try {
      return await axios.post(`${API_URL}/api/auth/maillogin`, payload, {
        withCredentials: true,
      });
    } catch (e) {
      return e.response;
    }
  },
};
