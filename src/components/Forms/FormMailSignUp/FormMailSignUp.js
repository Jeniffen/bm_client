/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';
import { InputGroup } from './../../Inputs/InputGroup';
import { Input } from '../../Inputs/Input';
import { Button } from '../../Button';
import { Checkbox } from '../../Checkbox';

import useFormMailSignUp from './useFormMailSignUp';

const FormMailSignUp = ({ size }) => {
  const [register, errors, handleOnSubmit] = useFormMailSignUp();

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
        placeholder="Birthdate"
        typeErr={errors.birthdate}
        register={register('birthdate')}
        labelText="To sign up, you need to be at least 18. Your birthday won’t be shared
        with other people who use [APPNAME]."
      />
      <Input
        size={size}
        placeholder="Email"
        typeErr={errors.email}
        register={register('email')}
        labelText="We'll email you booking confirmations and receipts."
      />
      <Input
        size={size}
        placeholder="Password"
        typeErr={errors.password}
        register={register('password')}
      />
      <p>
        By selecting Agree and continue below, I agree to [APPNAME] Terms of
        Service, Payments Terms of Service, Privacy Policy, and
        Nondiscrimination Policy.
      </p>
      <Button
        type="submit"
        btnType="primary"
        size="extra-large"
        label="Agree and continue"
      />
      <Style.SeparatorStyle />
      <p>
        [APPNAME] will send you members-only deals, inspiration, marketing
        emails, and push notifications. You can opt out of receiving these at
        any time in your account settings or directly from the marketing
        notification.
      </p>
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
