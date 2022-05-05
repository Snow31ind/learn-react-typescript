import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

type Props = {};

const Box = (props: Props) => {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}
    >
      Box
    </div>
  );
};

export default Box;
