import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';
import { useForm } from 'react-hook-form';
import { Input } from '../../Input';
import { Button } from '../../Button';

const FormMailLogin = ({
  size,
  inputPlaceholder,
  footerText,
  anchorText,
  handleOptions,
  handleAnchor,
}) => {
  const { register, handleSubmit, getValues, setValue } = useForm();

  return (
    <Style.FormWrapper>
      <Style.InputGroup>
        <Input register={register} size={size} placeholder="Email" />
        <hr className="inputGroup" />
        <Input register={register} size={size} placeholder="Password" />
      </Style.InputGroup>
      <Button btnType="primary" size="extra-large" label="Log in" />
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
