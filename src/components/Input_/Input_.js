import React from 'react';
import Style from './styles';
import useInput from './useInput';

const Input_ = ({
  register,
  type,
  typeErr,
  size,
  border,
  placeholder,
  className,
}) => {
  const [showLabel, handleInputChange] = useInput({ register });
  console.log(size);
  return (
    <Style.Wrapper onChange={handleInputChange} size={size}>
      <Style.PrimaryInput
        className={`complexInput ${className}`}
        type={type}
        typeErr={typeErr}
        border={border}
        {...register}
      />
      <Style.InputLabel showLabel={showLabel}>{placeholder}</Style.InputLabel>
    </Style.Wrapper>
  );
};

export default Input_;
