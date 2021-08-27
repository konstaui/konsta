import React, { useRef, forwardRef, useImperativeHandle } from 'react';
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

  const colors = {
    bg: 'bg-primary',
    text: 'text-white',
    ...colorsProp,
  };

  const size = small ? 'sm' : 'md';

  const c = themeClasses(
    {
      base: {
        common: `${colors.bg} ${colors.text} inline-flex items-center justify-center rounded-full leading-none`,
        ios: `font-semibold`,
        material: `font-medium`,
        sm: 'text-2xs min-w-4 min-h-4 px-0.5',
        md: 'text-xs min-w-5 min-h-5 px-1.5 py-0.5',
      },
    },
    className
  );

  return (
    <Component ref={elRef} className={c.base[size]} {...attrs}>
      {children}
    </Component>
  );
});

Badge.displayName = 'Badge';

export default Badge;
