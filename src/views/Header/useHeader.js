import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import { DialogOAuth } from '../../components/Dialogs/DialogViews/DialogOAuth';
import authService from '../../api/authService';
import useAuthState from '../../hooks/useAuthState';

export default function useHeader({ setExpandedBar = null }) {
  const { handleOpenModal, handleCloseModal } = useContext(ModalContext);
  const authState = useAuthState();

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
          <DialogOAuth
            headerTitle="Sign Up"
            footerText="Already have an account?"
            anchorText="Log in"
            onHeaderClose={handleCloseModal}
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
          <DialogOAuth
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
      weight: 'medium',
      text: 'Messages',
      divider: false,
      onClick: () =>
        handleOpenModal(
          <DialogOAuth
            headerTitle="Sign Up"
            footerText="Already have an account?"
            anchorText="Log in"
            onHeaderClose={handleCloseModal}
          />
        ),
    },
    {
      key: '2',
      weight: 'medium',
      text: 'Saved',
      divider: true,
      onClick: () =>
        handleOpenModal(
          <DialogOAuth
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
      text: 'Manage listings',
      divider: false,
      onClick: () => console.log('Route to services'),
    },
    {
      key: '4',
      weight: 'light',
      text: 'Account',
      divider: true,
      onClick: () => console.log('Route to services'),
    },
    {
      key: '5',
      weight: 'light',
      text: 'Help',
      divider: false,
      onClick: () => console.log('Route to services'),
    },
    {
      key: '6',
      weight: 'light',
      text: 'Logout',
      divider: false,
      onClick: () => authService.getLogout(),
    },
  ];

  const items = authState.isAuthenticated ? authorizedItems : unauthorizedItems;

  return [items, inputs, handleHeaderFocus];
}
