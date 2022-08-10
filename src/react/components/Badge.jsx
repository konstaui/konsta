import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { BadgeClasses } from '../../shared/classes/BadgeClasses.js';
import { BadgeColors } from '../../shared/colors/BadgeColors.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';

const Badge = forwardRef((props, ref) => {
  const {
    component = 'span',
    className,
    colors: colorsProp,
    small,

    ios,
    material,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const elRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  const Component = component;

  const attrs = {
    ...rest,
  };

  const themeClasses = useThemeClasses({ ios, material });

  const colors = BadgeColors(colorsProp);

  const size = small ? 'sm' : 'md';

  const c = themeClasses(BadgeClasses(props, colors), className);

  return (
    <Component ref={elRef} className={c.base[size]} {...attrs}>
      {children}
    </Component>
  );
});

Badge.displayName = 'Badge';

export default Badge;
