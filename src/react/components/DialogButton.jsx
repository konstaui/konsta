import React, { useRef } from 'react';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';

import { useDarkClasses } from '../shared/use-dark-classes.js';
import { DialogButtonColors } from '../../shared/colors/DialogButtonColors.js';
import Button from './Button.jsx';

const DialogButton = (props) => {
  const {
    component = 'button',
    className,
    colors: colorsProp,
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
  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const colors = DialogButtonColors(colorsProp, dark);

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
