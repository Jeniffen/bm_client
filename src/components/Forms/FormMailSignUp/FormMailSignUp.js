/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';
import { useForm } from 'react-hook-form';
import { Input } from '../../Input';
import { Input_ } from '../../Input_';
import { Button } from '../../Button';
import { Checkbox } from '../../Checkbox';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import moment from 'moment';
import authService from '../../../api/authService';

const FormMailSignUp = ({ size }) => {
  const minumumDate = moment()
    .subtract(18, 'years')
    .add(1, 'days')
    .format('MM-DD-YYYY');

  const schema = Joi.object({
    firstName: Joi.string().alphanum().required().messages({
      'string.empty': '⚠️ First name is required.',
      'string.alphanum': '⚠️ Please use valid characters for your name.',
    }),
    lastName: Joi.string()
      .alphanum()
      .required()
      .messages({ 'string.empty': '⚠️ Last name is required.' }),
    birthdate: Joi.date().less(minumumDate).required().messages({
      'date.base': '⚠️ Select your birth date to continue.',
      'date.less':
        '⚠️ You must be 18 or older to use [APPNAME]. Other people won’t see your birthday.',
    }),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        'string.empty': '⚠️ Email is required.',
        'string.email': '⚠️ Enter a valid email.',
      }),
    password: Joi.string().required().messages({
      'string.empty': '⚠️ Password is required.',
    }),
    promotion: Joi.boolean(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: joiResolver(schema) });

  const onSubmit = (data) => {
    // If checkbox for promotion was selected, user actively opted-out
    data.promotion = !data.promotion;
    console.log(data);
    // authService.postMailSignUp(data);
  };

  return (
    <Style.FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Style.InputGroup typeErr={errors.firstName || errors.lastName}>
        <Input
          register={register('firstName')}
          typeErr={errors.firstName}
          size={size}
          placeholder="First name"
        />
        <hr className="inputGroup" />
        <Input
          register={register('lastName')}
          typeErr={errors.lastName}
          size={size}
          placeholder="Last name"
        />
      </Style.InputGroup>
      {errors.firstName ? (
        <p>{errors.firstName?.message}</p>
      ) : errors.lastName ? (
        <p>{errors.lastName?.message}</p>
      ) : (
        <p>Make sure it matches the name on your government ID.</p>
      )}
      <Input_
        size={size}
        placeholder="Birthdate"
        typeErr={errors.birthdate}
        register={register('birthdate')}
        labelText="To sign up, you need to be at least 18. Your birthday won’t be shared
        with other people who use [APPNAME]."
      />
      <Input_
        size={size}
        placeholder="Email"
        typeErr={errors.email}
        register={register('email')}
        labelText="We'll email you booking confirmations and receipts."
      />
      <Input_
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

export default FormMailSignUp;
