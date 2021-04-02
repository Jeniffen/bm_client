import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';
import { useForm } from 'react-hook-form';
import { Input } from '../../Input';
import { Button } from '../../Button';
import { Checkbox } from '../../Checkbox';

const FormMailSignUp = ({ size, dropdownType, inputPlaceholder }) => {
  const { register, handleSubmit, getValues, setValue } = useForm();

  const handleOnBlur = (value) => {
    if (!value) {
      setValue(inputPlaceholder, '');
    }
  };

  return (
    <Style.FormWrapper>
      <Style.InputGroup>
        <Input
          register={register}
          size={size}
          placeholder="First name"
          onBlur={() => handleOnBlur(getValues('primary-input'))}
        />
        <hr className="inputGroup" />
        <Input
          register={register}
          size={size}
          placeholder="Last name"
          onBlur={() => handleOnBlur(getValues('primary-input'))}
        />
      </Style.InputGroup>
      <p>Make sure it matches the name on your government ID.</p>
      <Style.InputWrapper>
        <Input
          register={register}
          size={size}
          placeholder="Birthdate"
          onBlur={() => handleOnBlur(getValues('primary-input'))}
        />
      </Style.InputWrapper>
      <p>
        To sign up, you need to be at least 18. Your birthday won’t be shared
        with other people who use [APPNAME].
      </p>
      <Style.InputWrapper>
        <Input
          register={register}
          size={size}
          placeholder="Email"
          onBlur={() => handleOnBlur(getValues('primary-input'))}
        />
      </Style.InputWrapper>
      <p>We'll email you booking confirmations and receipts.</p>
      <Style.InputWrapper>
        <Input
          register={register}
          size={size}
          placeholder="Password"
          onBlur={() => handleOnBlur(getValues('primary-input'))}
        />
      </Style.InputWrapper>
      <p>
        By selecting Agree and continue below, I agree to [APPNAME] Terms of
        Service, Payments Terms of Service, Privacy Policy, and
        Nondiscrimination Policy.
      </p>
      <Button btnType="primary" size="extra-large" label="Agree and continue" />
      <Style.SeparatorStyle />
      <p>
        [APPNAME] will send you members-only deals, inspiration, marketing
        emails, and push notifications. You can opt out of receiving these at
        any time in your account settings or directly from the marketing
        notification.
      </p>
      <Checkbox labelText="I don’t want to receive marketing messages from [APPNAME]." />
    </Style.FormWrapper>
  );
};

FormMailSignUp.propTypes = {
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

export default FormMailSignUp;
