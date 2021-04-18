import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import authService from '../../../api/authService';

export default function useFormMailLogin() {
  const schema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        'string.empty': '⚠️ Email is required.',
        'string.email': '⚠️ Enter a valid email.',
      }),
    password: Joi.string().required().min(8).messages({
      'string.empty': '⚠️ Password is required.',
      'string.min': '⚠️ Your password must be at least 8 characters.',
    }),
  });

  const onSubmit = async (data) => {
    const res = await authService.postMailLogin(data);
    // authService.refresh(res.data);
    console.log(res);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: joiResolver(schema) });

  return [register, handleSubmit(onSubmit), errors];
}

// Let's try that again
// There isn’t an account associated with this email address. Please try another email.

// Let's try that again
// The password you entered is incorrect. Try again, or choose another login option.
