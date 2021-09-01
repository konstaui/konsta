import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';

const Fab = forwardRef((props, ref) => {
  const {
    component = 'a',
    className,
    colors: colorsProp,

    href,
    text,
    textPosition = 'after',
    icon,

    ios,
    material,

    touchRipple = true,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const rippleElRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: rippleElRef.current,
  }));

  const Component = component;

  const attrs = {
    ...rest,
  };

  const theme = useTheme({ ios, material });
  const themeClasses = useThemeClasses({ ios, material });

  useTouchRipple(rippleElRef, theme === 'material' && touchRipple);

  const colors = {
    bg: 'bg-primary',
    activeBg: 'active:bg-primary-dark',
    text: 'text-white',
    ...colorsProp,
  };

  const c = themeClasses(
    {
      base: {
        common: `${colors.bg} ${colors.activeBg} ${colors.text} flex items-center justify-center space-x-2 rounded-full shadow-lg cursor-pointer overflow-hidden select-none`,
        ios: `h-12 duration-100`,
        material: `duration-300 touch-ripple-white`,
        iconOnly: {
          ios: 'w-12',
          material: 'w-14 h-14',
        },
        withText: {
          common: 'px-4',
          material: 'h-12',
        },
      },
      text: {
        common: 'uppercase text-sm',
        ios: 'font-semibold',
        material: 'font-medium tracking-wider',
      },
      icon: {
        common: 'h-1em w-1em',
        ios: 'text-icon-ios',
        material: 'text-icon-material',
      },
    },
    className
  );

  return (
    <Component
      className={text ? c.base.withText : c.base.iconOnly}
      href={href}
      ref={rippleElRef}
      {...attrs}
    >
      {text && textPosition === 'before' && (
        <span className={c.text}>{text}</span>
      )}
      {icon && <span className={c.icon}>{icon}</span>}
      {text && textPosition === 'after' && (
        <span className={c.text}>{text}</span>
      )}
      {children}
    </Component>
  );
});

Fab.displayName = 'Fab';

export default Fab;
