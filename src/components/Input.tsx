import React from 'react';

type Props = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ handleChange, value }: Props) => {
  return <input type="text" value={value} onChange={handleChange} />;
};

export default Input;
