import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';
import useFormMailLogin from './useFormMailLogin';

import { InputGroup } from '../../Inputs/InputGroup';
import { Input } from '../../Inputs/Input';

const FormMailLogin = ({
  size,
  footerText,
  anchorText,
  handleOptions,
  handleAnchor,
}) => {
  const [register, handleOnSubmit, errors] = useFormMailLogin();

  return (
    <Style.FormWrapper onSubmit={handleOnSubmit}>
      <InputGroup
        forceLabel={true}
        typeErr={errors.email || errors.password}
        inputA={
          <Input
            size={size}
            grouped={true}
            register={register('email')}
            typeErr={errors.email}
            placeholder="Email"
          />
        }
        inputB={
          <Input
            size={size}
            grouped={true}
            register={register('password')}
            typeErr={errors.password}
            placeholder="Password"
          />
        }
      />
      <Style.ExtendedButton
        btnType="primary"
        size="extra-large"
        label="Log in"
      />
      <Style.FooterWrapper>
        <p className="password">
          <a onClick={handleAnchor}>{'Forgot password?'}</a>
        </p>
        <p>
          <a onClick={handleOptions}>{'More login options'}</a>
        </p>
        <p>
          {footerText} <a onClick={handleAnchor}>{anchorText}</a>
        </p>
      </Style.FooterWrapper>
    </Style.FormWrapper>
  );
};

FormMailLogin.propTypes = {
  /**
   * How large should the inputgroup be?
   */
  size: PropTypes.oneOf(['extra-large']),
  /**
   * Text asking if user has account
   */
  footerText: PropTypes.string,
  /**
   * Text that is shown with link to sign in
   */
  anchorText: PropTypes.string,
  /**
   * function to alternative options to login
   */
  handleOptions: PropTypes.func,
  /**
   * function to with link to sign in
   */
  handleAnchor: PropTypes.func,
};

export default FormMailLogin;
