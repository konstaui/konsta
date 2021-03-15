import React from 'react';
import { useTheme } from '../shared/use-theme';
import { useThemeClasses } from '../shared/use-theme-classes';

const Subnavbar = (props) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    position = 'relative',
    ios,
    material,
    children,
    ...rest
  } = props;

  const Component = component;

  const theme = useTheme({ ios, material });
  const themeClasses = useThemeClasses({ ios, material });

  const attrs = {
    ...rest,
  };

  const colors = {
    bg: theme === 'ios' ? 'bg-gray-100' : 'bg-white',
    ...colorsProp,
  };

  const c = themeClasses(
    {
      base: {
        common: `w-full ${position} z-50`,
        ios: 'h-11',
        material: 'h-12',
      },
      bg: {
        common: 'absolute w-full h-full left-0 top-0',
        ios: `hairline-b ${colors.bg}`,
        material: `shadow-md ${colors.bg}`,
      },
      inner: 'flex relative justify-between items-center w-full h-full px-2',
    },
    className
  );

  return (
    <Component className={c.base} {...attrs}>
      <div className={c.bg} />
      <div className={c.inner}>{children}</div>
    </Component>
  );
};

export default Subnavbar;
