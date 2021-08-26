import React from 'react';
import { cls } from '../shared/cls.js';
import { positionClass } from '../shared/position-class.js';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';

const Navbar = (props) => {
  const {
    component = 'div',
    className,

    bgClassName = '',
    innerClassName = '',
    leftClassName = '',
    titleClassName = '',
    subtitleClassName = '',
    rightClassName = '',
    subnavbarClassName = '',

    colors: colorsProp,
    translucent = true,

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
        common: `w-full ${positionClass('relative', className)} z-20`,
        ios: '',
        material: '',
      },
      bg: {
        common: cls('absolute w-full h-full left-0 top-0', bgClassName),
        ios: cls(`hairline-b ${colors.bg}`, translucent && 'translucent'),
        material: `shadow-md ${colors.bg}`,
      },
      subnavbar: {
        common: cls('relative flex items-center', subnavbarClassName),
        ios: 'h-11 px-2',
        material: 'h-12 px-4',
      },
      inner: {
        common: cls(
          'flex relative items-center w-full overflow-hidden',
          innerClassName
        ),
        ios: cls(
          'px-2 h-11',
          !left && right ? 'justify-end' : 'justify-between'
        ),
        material: 'justify-start h-14 lg:h-16 text-xl',
      },
      left: {
        common: cls('flex justify-center items-center h-full', leftClassName),
        ios: 'mr-2',
        material: 'mx-1',
      },
      title: {
        common: cls(
          'text-black dark:text-white whitespace-nowrap leading-tight',
          titleClassName
        ),
        ios: 'font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center',
        material: 'font-medium mx-4 text-left',
      },
      subtitle: {
        common: cls('font-normal leading-none', subtitleClassName),
        ios: 'text-2xs opacity-55',
        material: 'text-sm opacity-85',
      },
      right: {
        common: cls('flex justify-center items-center h-full', rightClassName),
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
