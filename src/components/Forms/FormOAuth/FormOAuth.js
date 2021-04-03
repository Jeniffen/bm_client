import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';
import { FormPhoneAuth } from './../FormPhoneAuth';
import { Button } from '../../Button';
import { Icons } from '../../Icons';
import useOAuth from './useOAuth';

const FormOAuth = ({
  size,
  dropdownType,
  inputPlaceholder,
  footerText,
  anchorText,
  handleAnchor,
  handleMailAuth,
  onHeaderClose,
}) => {
  const [socialAuth] = useOAuth({ onHeaderClose, handleMailAuth });

  return (
    <Style.FormWrapper>
      <FormPhoneAuth
        size={size}
        dropdownType={dropdownType}
        inputPlaceholder={inputPlaceholder}
      />
      <Style.DialogSeparator seperatorText="or" />
      {socialAuth.map(({ key, logo, label, provider, onClick }) => (
        <form key={key}>
          <Button
            key={key}
            btnType="secondary"
            type="button"
            size={size}
            label={label}
            onClick={onClick}
            prefixIcon={<Icons type={logo} size="small" />}
          />
        </form>
      ))}
      <Style.FooterWrapper>
        <p>
          {footerText} <a onClick={handleAnchor}>{anchorText}</a>
        </p>
      </Style.FooterWrapper>
    </Style.FormWrapper>
  );
};

export default FormOAuth;
