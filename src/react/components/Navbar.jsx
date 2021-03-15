import React from 'react';
import { useTheme } from '../shared/use-theme';
import { useThemeClasses } from '../shared/use-theme-classes';

const Navbar = (props) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    position = 'relative',

    left,
    title,
    right,
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
    bg:
      theme === 'ios'
        ? 'bg-bars-ios-light dark:bg-bars-ios-dark'
        : 'bg-bars-material-light dark:bg-bars-material-dark',
    ...colorsProp,
  };

  const c = themeClasses(
    {
      base: {
        common: `w-full ${position} z-50`,
        ios: 'h-11',
        material: 'h-14 text-xl',
      },
      bg: {
        common: 'absolute w-full h-full left-0 top-0',
        ios: `hairline-b ${colors.bg}`,
        material: `shadow-md ${colors.bg}`,
      },
      inner: {
        common: 'flex relative items-center w-full h-full overflow-hidden',
        ios: 'px-2 justify-between',
        material: 'justify-start ',
      },
      left: {
        common: 'flex justify-center items-center h-full',
        ios: 'mr-2',
        material: 'mx-1',
      },
      title: {
        common: 'text-black dark:text-white whitespace-nowrap',
        ios:
          'font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
        material: 'font-medium mx-4',
      },
      right: {
        common: 'flex justify-center items-center h-full',
        ios: 'ml-2',
        material: 'ml-auto mr-1',
      },
    },
    className
  );

  return (
    <Component className={c.base} {...attrs}>
      <div className={c.bg} />
      <div className={c.inner}>
        {left && <div className={c.left}>{left}</div>}
        {title && <div className={c.title}>{title}</div>}
        {right && <div className={c.right}>{right}</div>}
        {children}
      </div>
    </Component>
  );
};

export default Navbar;
