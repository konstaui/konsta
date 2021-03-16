import React from 'react';
import { useTheme } from '../../shared/use-theme';

const CheckboxIcon = (props) => {
  const { ios, material, fill, ...rest } = props;

  const theme = useTheme({ ios, material });
  return theme === 'ios' ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="9"
      viewBox="0 0 12 9"
      fill="currentcolor"
      {...rest}
    >
      <polygon
        fill={fill}
        points="12 .7 11.3 0 3.9 7.4 .7 4.2 0 4.9 3.9 8.8 3.9 8.8 3.9 8.8"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="currentcolor"
      {...rest}
    >
      <polygon
        fill={fill}
        points="6 11.17 1.83 7 .41 8.41 6 14 18 2 16.59 .59"
      />
    </svg>
  );
};

export default CheckboxIcon;
