import React from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';

const Badge = (props) => {
  const {
    component = 'span',
    className,
    colors: colorsProp,
    sm,

    ios,
    material,

    // Children
    children,

    // Rest
    ...rest
  } = props;

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

  const size = sm ? 'sm' : 'md';

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
    <Component className={c.base[size]} {...attrs}>
      {children}
    </Component>
  );
};

export default Badge;
