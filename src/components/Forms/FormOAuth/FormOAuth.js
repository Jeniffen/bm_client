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
  onHeaderClose,
}) => {
  const [socialAuth, openPopup] = useOAuth({ onHeaderClose });

  return (
    <Style.FormWrapper>
      <FormPhoneAuth
        size={size}
        dropdownType={dropdownType}
        inputPlaceholder={inputPlaceholder}
      />
      <Style.DialogSeparator seperatorText="or" />
      {socialAuth.map(({ key, logo, label, provider }) => (
        <form key={key}>
          <Button
            key={key}
            btnType="secondary"
            type="button"
            size={size}
            label={label}
            onClick={() => openPopup(provider)}
            prefixIcon={<Icons type={logo} size="small" />}
          />
        </form>
      ))}
      <Style.FooterWrapper>
        <p>
          {footerText} <a>{anchorText}</a>
        </p>
      </Style.FooterWrapper>
    </Style.FormWrapper>
  );
};

export default FormOAuth;
