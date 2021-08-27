import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { cls } from '../shared/cls.js';
import { positionClass } from '../shared/position-class.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';

const Navbar = forwardRef((props, ref) => {
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
    hairlines = true,

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

  const elRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  const Component = component;

  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const attrs = {
    ...rest,
  };

  const colors = {
    bgIos: cls('bg-bars-ios-light', dark('dark:bg-bars-ios-dark')),
    bgMaterial: cls(
      'bg-bars-material-light',
      dark('dark:bg-bars-material-dark')
    ),
    title: cls('text-black', dark('dark:text-white')),
    ...colorsProp,
  };

  const c = themeClasses(
    {
      base: {
        common: cls(
          `w-full z-20 top-0 pt-safe`,
          positionClass('sticky', className)
        ),
        ios: '',
        material: '',
      },
      bg: {
        common: cls('absolute w-full h-full left-0 top-0', bgClassName),
        ios: cls(
          colors.bgIos,
          hairlines && 'hairline-b',
          translucent && 'translucent'
        ),
        material: `shadow-md ${colors.bgMaterial}`,
      },
      subnavbar: {
        common: cls('relative flex items-center', subnavbarClassName),
        ios: 'h-11 pl-2-safe pr-2-safe',
        material: 'h-12 pl-4-safe pr-4-safe',
      },
      inner: {
        common: cls(
          'flex relative items-center w-full overflow-hidden',
          innerClassName
        ),
        ios: cls(
          'pl-2-safe pr-2-safe h-11',
          !left && right ? 'justify-end' : 'justify-between'
        ),
        material: 'justify-start h-14 lg:h-16 text-xl',
      },
      left: {
        common: cls('flex justify-center items-center h-full', leftClassName),
        ios: 'mr-2 transform transform-gpu',
        material: 'mx-1',
      },
      title: {
        common: cls(
          `${colors.title} whitespace-nowrap leading-tight`,
          titleClassName
        ),
        ios: 'font-semibold absolute top-1/2 left-1/2 transform-gpu -translate-x-1/2 -translate-y-1/2 text-center',
        material: 'font-medium mx-4 text-left',
      },
      subtitle: {
        common: cls('font-normal leading-none', subtitleClassName),
        ios: 'text-2xs opacity-55',
        material: 'text-sm opacity-85',
      },
      right: {
        common: cls('flex justify-center items-center h-full', rightClassName),
        ios: 'ml-2 transform transform-gpu',
        material: 'ml-auto mr-1',
      },
    },
    className
  );

  return (
    <Component ref={elRef} className={c.base} {...attrs}>
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
});

Navbar.displayName = 'Navbar';

export default Navbar;
