import axios from 'axios';
import { API_URL } from '../config';

export default {
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
};
