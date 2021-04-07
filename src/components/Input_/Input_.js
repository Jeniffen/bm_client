import React from 'react';
import Style from './styles';
import useInput from './useInput';

const Input_ = ({
  size,
  type,
  placeholder,
  labelText,
  typeErr,
  register,
  className,
}) => {
  const [showLabel, handleInputChange] = useInput({ register });

  return (
    <Style.Wrapper size={size} typeErr={typeErr} onChange={handleInputChange}>
      <Style.PrimaryInput
        type={type}
        className={`complexInput ${className}`}
        {...register}
      />
      <Style.Placeholder showLabel={showLabel}>{placeholder}</Style.Placeholder>
      <Style.InputLabel>
        {typeErr ? typeErr?.message : labelText || null}
      </Style.InputLabel>
    </Style.Wrapper>
  );
};

export default Input_;
