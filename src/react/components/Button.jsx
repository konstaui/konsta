import React, { useRef } from 'react';
import { cls } from '../../shared/cls.js';
import { useTheme } from '../shared/use-theme.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';

import { useDarkClasses } from '../shared/use-dark-classes.js';
import { ButtonClasses } from '../../shared/classes/ButtonClasses.js';
import { ButtonColors } from '../../shared/colors/ButtonColors.js';
import { getThemeSpecificProps } from '../shared/get-theme-specific-props.js';

const Button = (props) => {
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

    // Children
    children,

    ref,

    // Rest
    ...rest
  } = props;

  const rippleElRef = useRef(null);

  let Component = component;
  if (typeof props.component === 'undefined' && (href || href === ''))
    Component = 'a';

  const attrs = { href, ...rest };

  const theme = useTheme({ ios, material });
  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  useTouchRipple(rippleElRef, theme === 'material');

  const themeProps = getThemeSpecificProps(
    theme,
    {
      outline,
      clear,
      tonal,
      rounded,
      small,
      large,
      raised,
    },
    props
  );

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
    ButtonClasses({ ...props, ...themeProps }, colors, dark)
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
      ref={(el) => {
        rippleElRef.current = el;
        if (ref && typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
      className={classes}
      disabled={disabled}
      role="button"
      tabIndex="0"
      {...attrs}
    >
      {children}
    </Component>
  );
};

Button.displayName = 'Button';

export default Button;
