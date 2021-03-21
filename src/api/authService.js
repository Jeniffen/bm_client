import axios from 'axios';
import { API_URL } from '../config';

export default {
  getLogout: async () => {
    await axios.get(`${API_URL}/api/auth/logout`, { withCredentials: true });
    window.location.reload();
  },
};
