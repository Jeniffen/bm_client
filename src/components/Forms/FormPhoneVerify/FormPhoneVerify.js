import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import Style from './styles';
import ReactCodeInput from 'react-code-input';
import { borderRadius } from 'polished';

const FormPhoneVerify = ({ size, dropdownType, inputPlaceholder }) => {
  const { register, handleSubmit, getValues, setValue } = useForm();
  const props = {
    className: 'reactCodeInput',
    inputStyle: {
      fontFamily:
        'Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif !important',
      margin: '4px',
      MozAppearance: 'textfield',
      width: '48px',
      borderRadius: '12px',
      fontSize: '20px',
      height: '52px',
      backgroundColor: '#fff',
      color: '#000',
      border: '1px solid #a0aec0',
      outline: 'none',
      textAlign: 'right',
    },
  };

  return (
    <Style.FormWrapper>
      <ReactCodeInput type="number" inputMode="numeric" fields={6} {...props} />
    </Style.FormWrapper>
  );
};

export default FormPhoneVerify;
