import { useContext } from 'react';
import useAuthState from '../../hooks/useAuthState';

export default function useNavbar() {
  const authState = useAuthState();

  const imageURL = authState.isAuthenticated
    ? authState.user.picture
    : 'avatar';

  const userName = authState.isAuthenticated
    ? authState.user.givenName
    : 'avatar-name';

  return [imageURL, userName];
}
