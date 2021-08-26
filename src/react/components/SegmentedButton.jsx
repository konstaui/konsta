import React from 'react';
import Button from './Button.jsx';

const SegmentedButton = (props) => {
  const { active, children, outline, strong, clear, rounded, ...rest } = props;

  return (
    <Button
      segmented
      segmentedActive={active}
      segmentedStrong={strong}
      rounded={rounded && strong}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default SegmentedButton;
