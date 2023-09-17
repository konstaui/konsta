import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { cls } from '../../shared/cls.js';
import { useTheme } from '../shared/use-theme.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';

import { useDarkClasses } from '../shared/use-dark-classes.js';
import { ButtonClasses } from '../../shared/classes/ButtonClasses.js';
import { ButtonColors } from '../../shared/colors/ButtonColors.js';

const Button = forwardRef((props, ref) => {
  const {
    component = 'button',
    className,
    colors: colorsProp,

    ios,
    material,

    disabled,

    // Anchor props
    href,

    // Style props
    outline,
    outlineIos,
    outlineMaterial,
    clear,
    clearIos,
    clearMaterial,
    tonal,
    tonalIos,
    tonalMaterial,
    rounded,
    roundedIos,
    roundedMaterial,
    small,
    smallIos,
    smallMaterial,
    large,
    largeIos,
    largeMaterial,
    raised,
    raisedIos,
    raisedMaterial,

    inline,

    // Segmented
    segmented,
    segmentedStrong,
    segmentedActive,

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

  const getThemeSpecificProps = (obj) => {
    const res = {};
    Object.keys(obj).forEach((key) => {
      res[key] =
        typeof obj[key] === 'undefined'
          ? theme === 'ios'
            ? props[`${key}Ios`]
            : props[`${key}Material`]
          : obj[key];
    });
    return res;
  };
  const themeProps = getThemeSpecificProps({
    outline,
    clear,
    tonal,
    rounded,
    small,
    large,
    raised,
  });

  const size = themeProps.large
    ? 'large'
    : themeProps.small
    ? 'small'
    : 'medium';
  let style = themeProps.outline
    ? 'outline'
    : themeProps.clear || (segmented && !segmentedActive)
    ? 'clear'
    : themeProps.tonal
    ? 'tonal'
    : 'fill';
  if (segmentedStrong) style = 'segmentedStrong';
  if (segmentedStrong && segmentedActive) style = 'segmentedStrongActive';

  const colors = ButtonColors(colorsProp, dark);

  const c = themeClasses(
    ButtonClasses(
      {
        ...props,
        ...themeProps,
      },
      colors,
      className,
      dark
    )
  );

  const classes = cls(
    c.base[themeProps.rounded ? 'rounded' : 'square'],

    // style
    c.style[style],

    // size
    c.size[size],

    themeProps.raised && c.raised,

    className
  );

  return (
    <Component
      ref={rippleElRef}
      className={classes}
      disabled={disabled}
      role="button"
      tabIndex="0"
      {...attrs}
    >
      {children}
    </Component>
  );
});

Button.displayName = 'Button';

export default Button;
