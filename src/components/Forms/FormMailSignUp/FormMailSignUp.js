import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';
import { useForm } from 'react-hook-form';
import { Input } from '../../Input';
import { Button } from '../../Button';
import { Checkbox } from '../../Checkbox';
import authService from '../../../api/authService';

const FormMailSignUp = ({ size }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => authService.postMailSignUp(data);

  return (
    <Style.FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Style.InputGroup>
        <Input
          register={register('firstName')}
          size={size}
          placeholder="First name"
        />
        <hr className="inputGroup" />
        <Input
          register={register('lastName')}
          size={size}
          placeholder="Last name"
        />
      </Style.InputGroup>
      <p>Make sure it matches the name on your government ID.</p>
      <Style.InputWrapper>
        <Input
          register={register('birthdate')}
          size={size}
          placeholder="Birthdate"
        />
      </Style.InputWrapper>
      <p>
        To sign up, you need to be at least 18. Your birthday won’t be shared
        with other people who use [APPNAME].
      </p>
      <Style.InputWrapper>
        <Input register={register('email')} size={size} placeholder="Email" />
      </Style.InputWrapper>
      <p>We'll email you booking confirmations and receipts.</p>
      <Style.InputWrapper>
        <Input
          register={register('password')}
          size={size}
          placeholder="Password"
        />
      </Style.InputWrapper>
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

export default FormMailSignUp;
