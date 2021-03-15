import React from 'react';
import { useThemeClasses } from '../shared/use-theme-classes';

const Badge = (props) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,

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

  const c = themeClasses(
    {
      base: {
        common: `${colors.bg} ${colors.text} text-xs px-1.5 py-0.5 inline-flex items-center justify-center rounded-full min-w-5`,
        ios: `font-semibold`,
        material: `font-medium`,
      },
    },
    className
  );

  return (
    <Component className={c.base} {...attrs}>
      {children}
    </Component>
  );
};

export default Badge;
