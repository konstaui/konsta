import React from 'react';
import { useThemeClasses } from '../shared/use-theme-classes';

const Progressbar = (props) => {
  const {
    component = 'span',
    className,
    colors: colorsProp,

    ios,
    material,

    progress = 0,

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
    ...colorsProp,
  };

  const c = themeClasses(
    {
      base: {
        common: `block bg-opacity-30 overflow-hidden`,
        ios: `bg-black h-0.5 rounded`,
        material: `${colors.bg} h-1`,
      },
      inner: `block ${colors.bg} duration-200 w-full h-full`,
    },
    className
  );

  return (
    <Component className={c.base} {...attrs}>
      <span
        className={c.inner}
        style={{ transform: `translateX(-${100 - (progress / 1) * 100}%)` }}
      />
      {children}
    </Component>
  );
};

export default Progressbar;
