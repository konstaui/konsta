import React from 'react';

const RadioIcon = (props) => {
  const { fill, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="10"
      viewBox="0 0 13 10"
      fill="currentcolor"
      {...rest}
    >
      <polygon
        fill={fill}
        points="11.6 0 4.4 7.2 1.4 4.2 0 5.6 4.4 10 4.4 10 4.4 10 13 1.4"
      />
    </svg>
  );
};

export default RadioIcon;
