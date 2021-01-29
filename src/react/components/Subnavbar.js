import React from 'react';
import { useTheme } from '../shared/use-theme';

const Subnavbar = (props) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    position = 'relative',
    // Theme
    ios,
    material,
    children,
    ...rest
  } = props;

  const Component = component;

  const { theme, themeClasses } = useTheme({ ios, material });

  const attrs = {
    ...rest,
  };

  const colors = {
    bg: theme === 'ios' ? 'bg-gray-100' : 'bg-white',
    iosBg: 'ios:bg-gray-100',
    materialBg: 'material:bg-white',
    ...colorsProp,
  };

  const c = themeClasses(
    {
      base: {
        initial: `w-full ${position} z-50`,
        ios: 'h-11',
        material: 'h-12',
        common: 'ios:h-11 material:h-12',
      },
      bg: {
        initial: 'absolute w-full h-full left-0 top-0',
        ios: `hairline-b ${colors.bg}`,
        material: `shadow-md ${colors.bg}`,
        common: `ios:hairline-b ${colors.iosBg} material:shadow-md ${colors.materialBg}`,
      },
      inner: {
        initial:
          'flex relative justify-between items-center w-full h-full px-2',
      },
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
