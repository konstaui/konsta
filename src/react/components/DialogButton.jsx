import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';

import { useDarkClasses } from '../shared/use-dark-classes.js';
import { DialogButtonClasses } from '../../shared/classes/DialogButtonClasses.js';
import { DialogButtonColors } from '../../shared/colors/DialogButtonColors.js';
import Button from './Button.jsx';

const DialogButton = forwardRef((props, ref) => {
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

    // Rest
    ...rest
  } = props;

  const elRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

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

  const c = themeClasses(
    DialogButtonClasses({ ...props, strong: isStrong }, colors, dark),
    className
  );

  const Component = component;

  if (theme === 'ios')
    return (
      <Component
        className={c.base}
        disabled={disabled}
        role="button"
        tabIndex="0"
        {...attrs}
      >
        {children}
      </Component>
    );
  return (
    <Button
      component={component}
      inline
      rounded
      disabled={disabled}
      clear={!isStrong}
      className={className}
      {...attrs}
    >
      {children}
    </Button>
  );
});

DialogButton.displayName = 'DialogButton';

export default DialogButton;
