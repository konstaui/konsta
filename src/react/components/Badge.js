import React from 'react';
import { cls } from '../shared/cls';
import { useTheme } from '../shared/use-theme';

const Badge = (props) => {
  const {
    tag = 'div',
    className,
    colors: colorsProp,

    // Theme
    ios,
    material,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const Component = tag;

  const attrs = {
    ...rest,
  };

  const { themeClasses } = useTheme({ ios, material });

  const colors = {
    bg: 'bg-primary',
    text: 'text-white',
    ...colorsProp,
  };

  const c = {
    base: {
      initial: `${colors.bg} ${colors.text} text-xs px-1.5 py-0.5 flex items-center justify-center rounded-full min-w-5`,
      ios: `font-semibold`,
      material: `font-medium`,
      common: `ios:font-semibold material:font-medium`,
    },
  };

  const classes = cls(
    // base
    themeClasses(c.base),

    className
  );

  return (
    <Component className={classes} {...attrs}>
      {children}
    </Component>
  );
};

export default Badge;
