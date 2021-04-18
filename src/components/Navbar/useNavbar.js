import _ from 'lodash';
import useAuthState from '../../hooks/useAuthState';

export default function useNavbar() {
  const authState = useAuthState();
  const user = _.get(authState.user, 'user');

  const imageURL = authState.isAuthenticated ? user.picture : 'avatar';
  const userName = authState.isAuthenticated ? user.displayName : 'avatar-name';

  return [imageURL, userName];
}
