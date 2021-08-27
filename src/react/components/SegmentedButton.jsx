import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import Button from './Button.jsx';

const SegmentedButton = forwardRef((props, ref) => {
  const { active, children, outline, strong, clear, rounded, ...rest } = props;

  const elRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  return (
    <Button
      ref={elRef}
      segmented
      segmentedActive={active}
      segmentedStrong={strong}
      rounded={rounded && strong}
      {...rest}
    >
      {children}
    </Button>
  );
});

SegmentedButton.displayName = 'SegmentedButton';

export default SegmentedButton;
