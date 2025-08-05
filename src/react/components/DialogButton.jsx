import React, { useRef } from 'react';
import { useTheme } from '../shared/use-theme.js';
import Button from './Button.jsx';

const DialogButton = (props) => {
  const {
    component = 'button',
    className,
    ios,
    material,

    disabled,

    strong,
    strongIos,
    strongMaterial,

    // Children
    children,

    ref,

    // Rest
    ...rest
  } = props;

  const elRef = useRef(null);

  const attrs = {
    ...rest,
  };

  const theme = useTheme({ ios, material });

  const isStrong =
    typeof strong === 'undefined'
      ? theme === 'ios'
        ? strongIos
        : strongMaterial
      : strong;

  if (theme === 'ios')
    return (
      <Button
        component={component}
        ref={(el) => {
          elRef.current = el;
          if (ref && typeof ref === 'function') ref(el);
          else if (ref) ref.current = el;
        }}
        large
        rounded
        tonal={!isStrong}
        className={className}
        disabled={disabled}
        {...attrs}
      >
        {children}
      </Button>
    );
  return (
    <Button
      component={component}
      inline
      rounded
      disabled={disabled}
      clear={!isStrong}
      className={className}
      ref={(el) => {
        elRef.current = el;
        if (ref && typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
      {...attrs}
    >
      {children}
    </Button>
  );
};

DialogButton.displayName = 'DialogButton';

export default DialogButton;
