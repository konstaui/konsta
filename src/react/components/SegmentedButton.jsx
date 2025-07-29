import React, { useRef } from 'react';
import Button from './Button.jsx';

const SegmentedButton = (props) => {
  const { active, children, outline, strong, clear, rounded, ref, ...rest } =
    props;

  const elRef = useRef(null);

  return (
    <Button
      ref={(el) => {
        elRef.current = el;
        if (ref && typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
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

SegmentedButton.displayName = 'SegmentedButton';

export default SegmentedButton;
