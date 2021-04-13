/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';
import { InputGroup } from './../../Inputs/InputGroup';
import { Input } from '../../Inputs/Input';
import { PasswordValidator } from '../../Inputs/PasswordValidator';
import { Button } from '../../Button';
import { Checkbox } from '../../Checkbox';
import useFormMailSignUp from './useFormMailSignUp';

const FormMailSignUp = ({ size }) => {
  const [
    watch,
    register,
    errors,
    handleOnSubmit,
    showValidPassowrd,
    setShowValidPassword,
  ] = useFormMailSignUp();

  return (
    <Style.FormWrapper onSubmit={handleOnSubmit}>
      <InputGroup
        labelText={'Make sure it matches the name on your government ID.'}
        typeErr={errors.firstName || errors.lastName}
        inputA={
          <Input
            size={size}
            grouped={true}
            register={register('firstName')}
            typeErr={errors.firstName}
            placeholder="First name"
          />
        }
        inputB={
          <Input
            size={size}
            grouped={true}
            register={register('lastName')}
            typeErr={errors.lastName}
            placeholder="Last name"
          />
        }
      />
      <Input
        size={size}
        // type="date"
        placeholder="Birthdate"
        typeErr={errors.birthdate}
        register={register('birthdate')}
        labelText="To sign up, you need to be at least 18. Your birthday won’t be shared
        with other people who use [APPNAME]."
      />
      <Input
        size={size}
        type="email"
        placeholder="Email"
        typeErr={errors.email}
        register={register('email')}
        labelText="We'll email you booking confirmations and receipts."
      />
      <Input
        size={size}
        type="password"
        placeholder="Password"
        typeErr={errors.password}
        register={register('password')}
        onClick={() => setShowValidPassword(true)}
      />
      <PasswordValidator
        value={watch('password')}
        showValidPassowrd={showValidPassowrd}
      />
      <Style.Paragraph>
        By selecting <b>Agree and continue</b> below, I agree to [APPNAME]{' '}
        <a href="#">Terms of Service</a>,{' '}
        <a href="#">Payments Terms of Service</a>,{' '}
        <a href="#">Privacy Policy</a>, and{' '}
        <a href="#">Nondiscrimination Policy</a>.
      </Style.Paragraph>
      <Button
        type="submit"
        btnType="primary"
        size="extra-large"
        label="Agree and continue"
      />
      <Style.SeparatorStyle />
      <Style.Paragraph>
        [APPNAME] will send you members-only deals, inspiration, marketing
        emails, and push notifications. You can opt out of receiving these at
        any time in your account settings or directly from the marketing
        notification.
      </Style.Paragraph>
      <Checkbox
        register={register('promotion')}
        labelText="I don’t want to receive marketing messages from [APPNAME]."
      />
    </Style.FormWrapper>
  );
};

FormMailSignUp.propTypes = {
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['extra-large']),
};

export default FormMailSignUp;
