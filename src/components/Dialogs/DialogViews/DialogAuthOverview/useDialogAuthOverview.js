import { useState } from 'react';

export default function useDialogAuthOverview({ dialogType = null }) {
  const dialogType_ = dialogType === undefined ? 'login' : dialogType;
  const [authType, setAuthType] = useState({
    view: 'overview',
    type: dialogType_,
  });

  const headerTitle =
    authType.view === 'overview'
      ? authType.type === 'signup'
        ? 'Sign up'
        : authType.type === 'login'
        ? 'Log in'
        : null
      : authType.view === 'mailSignup'
      ? 'Finish signing up'
      : null;

  const footerText =
    authType.type === 'signup'
      ? 'Already have an account?'
      : authType.type === 'login'
      ? 'Don’t have an account?'
      : null;

  const anchorText =
    authType.type === 'signup'
      ? 'Log in'
      : authType.type === 'login'
      ? 'Sign up'
      : null;

  const handleMailAuth =
    authType.type === 'signup'
      ? () => setAuthType({ view: 'mailSignup', type: 'signup' })
      : authType.type === 'login'
      ? () => setAuthType({ view: null, type: 'login' })
      : null;

  const handleAnchor =
    authType.type === 'signup'
      ? () => setAuthType({ view: 'overview', type: 'login' })
      : authType.type === 'login'
      ? () => setAuthType({ view: 'overview', type: 'signup' })
      : null;

  return [
    authType.view,
    headerTitle,
    footerText,
    anchorText,
    handleMailAuth,
    handleAnchor,
  ];
}
