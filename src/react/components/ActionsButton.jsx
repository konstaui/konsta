import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { cls } from '../../shared/cls.js';
import { useTheme } from '../shared/use-theme.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { ActionsButtonClasses } from '../../shared/classes/ActionsButtonClasses.js';

const ActionsButton = forwardRef((props, ref) => {
  const {
    component = 'button',
    className,
    colors: colorsProp,

    ios,
    material,

    bold = false,

    fontSizeIos = 'text-xl',
    fontSizeMaterial = 'text-base',

    // Anchor props
    href,

    touchRipple = true,

    hairlines = true,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const rippleElRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: rippleElRef.current,
  }));

  let Component = component;
  if (typeof props.component === 'undefined' && (href || href === ''))
    Component = 'a';

  const attrs = {
    href,
    ...rest,
  };

  const theme = useTheme({ ios, material });
  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  useTouchRipple(rippleElRef, theme === 'material' && touchRipple);

  const colors = {
    bg: cls('bg-white', dark('dark:bg-neutral-800')),
    activeBg: cls('active:bg-neutral-200', dark('dark:active:bg-neutral-700')),
    text: 'text-primary',
    ...colorsProp,
  };

  const c = themeClasses(
    ActionsButtonClasses(
      { fontSizeIos, fontSizeMaterial, bold, hairlines, ...props },
      colors,
      dark
    ),
    className
  );

  return (
    <Component ref={rippleElRef} className={c.base} {...attrs}>
      {children}
    </Component>
  );
});

ActionsButton.displayName = 'ActionsButton';

export default ActionsButton;
