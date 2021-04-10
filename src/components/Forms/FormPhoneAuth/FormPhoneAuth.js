import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import Style from './styles';
import { InputGroup } from './../../Inputs/InputGroup';
import { Dropdown } from './../../Inputs/Dropdown';
import { Input } from '../../Inputs/Input';
import { Button } from '../../Button';

const FormPhoneAuth = ({ size, dropdownType, inputPlaceholder }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOnBlur = (value) => {
    if (!value) {
      // setValue(inputPlaceholder, '');
    }
  };

  return (
    <Style.FormWrapper>
      <InputGroup
        labelText="We’ll call or text you to confirm your number. Standard message and data rates apply."
        typeErr={errors.firstName || errors.lastName}
        inputA={
          <Dropdown
            size={size}
            grouped={true}
            labelText="Country/Region"
            register={register('firstName')}
            typeErr={errors.firstName}
            placeholder="First name"
          />
        }
        inputB={
          <Input
            size={size}
            grouped={true}
            register={register('phonenumber')}
            typeErr={errors.phonenumber}
            placeholder="Phone number"
          />
        }
      />
      <Button btnType="primary" size="extra-large" label="Continue" />
    </Style.FormWrapper>
  );
};

FormPhoneAuth.propTypes = {
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

export default FormPhoneAuth;
