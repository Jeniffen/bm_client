import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import Style from './styles';
import { Dropdown } from '../../Dropdown';
import { Input } from '../../Input';
import { Button } from '../../Button';

const FormPhoneAuth = ({ size, dropdownType, inputPlaceholder }) => {
  const { register, handleSubmit, getValues, setValue } = useForm();

  const handleOnBlur = (value) => {
    if (!value) {
      setValue(inputPlaceholder, '');
    }
  };

  return (
    <Style.FormWrapper>
      <Style.InputGroup>
        <Dropdown
          register={register}
          size={size}
          type={dropdownType}
          border={false}
        />
        <hr className="inputGroup" />
        <Input
          register={register}
          size={size}
          placeholder={inputPlaceholder}
          prefix={true}
          border={false}
          onFocus={() => setValue(inputPlaceholder, getValues(dropdownType))}
          onBlur={() => handleOnBlur(getValues('primary-input'))}
        />
      </Style.InputGroup>
      <p>
        We’ll call or text you to confirm your number. Standard message and data
        rates apply.
      </p>
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
