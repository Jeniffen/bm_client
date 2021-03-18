import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import { DialogSignIn } from '../../components/Dialogs/DialogSignIn';
import useAuthState from '../../hooks/useAuthState';

export default function useHeader({ API_URL = null, setExpandedBar = null }) {
  const { handleOpenModal, handleCloseModal } = useContext(ModalContext);
  const auth = useAuthState();

  console.log(auth);

  const handleHeaderFocus = (e) => {
    e.persist();
    if (e.target.id === 'inputSearchData') {
      setExpandedBar(true);
    }
  };

  const inputs = [
    {
      key: 'SEARCH_INPUT_SECONDARY',
      className: 'searchInputSecondary',
      inputLabel: 'Service',
      inputPlaceholder: 'What service are you looking for?',
      isSearch: false,
      divider: true,
    },
  ];

  const unauthorizedItems = [
    {
      key: '1',
      weight: 'bold',
      text: 'Sign up',
      divider: false,
      onClick: () =>
        handleOpenModal(
          <DialogSignIn
            headerTitle="Sign Up"
            footerText="Already have an account?"
            anchorText="Log in"
            onHeaderClose={handleCloseModal}
            API_URL={API_URL}
          />
        ),
    },
    {
      key: '2',
      weight: 'light',
      text: 'Log in',
      divider: true,
      onClick: () =>
        handleOpenModal(
          <DialogSignIn
            headerTitle="Log in"
            footerText="Don’t have an account?"
            anchorText="Sign up"
            onHeaderClose={handleCloseModal}
          />
        ),
    },
    {
      key: '3',
      weight: 'light',
      text: 'Offer a service',
      divider: false,
      onClick: () => console.log('Route to services'),
    },
    {
      key: '4',
      weight: 'light',
      text: 'Help',
      divider: false,
      onClick: () => console.log('Route to Help'),
    },
  ];

  const authorizedItems = [
    {
      key: '1',
      weight: 'bold',
      text: 'Messages',
      divider: false,
      onClick: () =>
        handleOpenModal(
          <DialogSignIn
            headerTitle="Sign Up"
            footerText="Already have an account?"
            anchorText="Log in"
            onHeaderClose={handleCloseModal}
            API_URL={API_URL}
          />
        ),
    },
    {
      key: '2',
      weight: 'bold',
      text: 'Saved',
      divider: true,
      onClick: () =>
        handleOpenModal(
          <DialogSignIn
            headerTitle="Log in"
            footerText="Don’t have an account?"
            anchorText="Sign up"
            onHeaderClose={handleCloseModal}
          />
        ),
    },
    {
      key: '3',
      weight: 'light',
      text: 'Logout',
      divider: false,
      onClick: () => console.log('Route to services'),
    },
  ];

  const items =
    auth.authStatus === 'success' ? authorizedItems : unauthorizedItems;

  return [items, inputs, handleHeaderFocus];
}
