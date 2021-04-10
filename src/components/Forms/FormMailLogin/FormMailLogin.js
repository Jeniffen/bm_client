import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';
import { useForm } from 'react-hook-form';
import { InputGroup } from '../../Inputs/InputGroup';
import { Input } from '../../Inputs/Input';

const FormMailLogin = ({
  size,
  footerText,
  anchorText,
  handleOptions,
  handleAnchor,
}) => {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <Style.FormWrapper>
      <InputGroup
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
   * What type of values does dropdown contain
   */
  dropdownType: PropTypes.string,
  /**
   * Input placeholder
   */
  inputPlaceholder: PropTypes.string,
  /**
   * Classes to be applied to the root element
   */
  className: PropTypes.string,
};

export default FormMailLogin;
