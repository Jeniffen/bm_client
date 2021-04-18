import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import moment from 'moment';
import authService from '../../../api/authService';

export default function useFormMailSignUp() {
  const [showValidPassowrd, setShowValidPassword] = useState(false);

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
    password: Joi.string()
      .required()
      .min(8)
      .pattern(new RegExp('[0-9]'))
      .pattern(new RegExp('[\\W_]'))
      .messages({
        'string.empty': '⚠️ Password is required.',
        'string.min': '⚠️ At least 8 characters are required.',
        'string.pattern.base': '⚠️ Password requires one number and symbol',
      }),
    promotion: Joi.boolean(),
  });

  const onSubmit = async (data) => {
    // If checkbox for promotion was selected, user actively opted-out
    data.promotion = !data.promotion;

    const res = await authService.postMailSignUp(data);
    authService.refresh(res.data);
  };

  const onError = (error) => {
    error.password && setShowValidPassword(true);
  };

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: joiResolver(schema) });

  return [
    watch,
    register,
    errors,
    handleSubmit(onSubmit, onError),
    showValidPassowrd,
    setShowValidPassword,
  ];
}
