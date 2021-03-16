import React from 'react';
import { positionClass } from '../shared/position-class';
import { useTheme } from '../shared/use-theme';
import { useThemeClasses } from '../shared/use-theme-classes';

const Navbar = (props) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,

    left,
    title,
    subtitle,
    right,
    subnavbar,
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
        common: `w-full ${positionClass('relative', className)} z-50`,
        ios: '',
        material: '',
      },
      bg: {
        common: 'absolute w-full h-full left-0 top-0',
        ios: `hairline-b ${colors.bg}`,
        material: `shadow-md ${colors.bg}`,
      },
      subnavbar: {
        common: 'relative flex items-center',
        ios: 'h-11 px-2',
        material: 'h-12 px-4',
      },
      inner: {
        common: 'flex relative items-center w-full overflow-hidden',
        ios: 'px-2 justify-between h-11',
        material: 'justify-start h-14 text-xl',
      },
      left: {
        common: 'flex justify-center items-center h-full',
        ios: 'mr-2',
        material: 'mx-1',
      },
      title: {
        common: 'text-black dark:text-white whitespace-nowrap leading-tight',
        ios:
          'font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center',
        material: 'font-medium mx-4 text-left',
      },
      subtitle: {
        common: 'font-normal leading-none',
        ios: 'text-2xs opacity-55',
        material: 'text-sm opacity-85',
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
        {(title || subtitle) && (
          <div className={c.title}>
            {title}
            {subtitle && <div className={c.subtitle}>{subtitle}</div>}
          </div>
        )}
        {right && <div className={c.right}>{right}</div>}
        {children}
      </div>
      {subnavbar && <div className={c.subnavbar}>{subnavbar}</div>}
    </Component>
  );
};

export default Navbar;
