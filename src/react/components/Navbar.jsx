import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { NavbarClasses } from '../../shared/classes/NavbarClasses.js';
import { NavbarColors } from '../../shared/colors/NavbarColors.js';

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

    centerTitle,

    colors: colorsProp,
    translucent = true,
    hairlines = true,

    fontSizeIos = 'text-[17px]',
    fontSizeMaterial = 'text-[16px]',

    titleFontSizeIos = 'text-[17px]',
    titleFontSizeMaterial = 'text-[22px]',

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

  const theme = useTheme({ ios, material });
  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const attrs = {
    ...rest,
  };

  const colors = NavbarColors(colorsProp, dark);

  const c = themeClasses(
    NavbarClasses(
      {
        ...props,
        centerTitle:
          typeof centerTitle === 'undefined' ? theme === 'ios' : centerTitle,
        translucent,
        hairlines,
        fontSizeIos,
        fontSizeMaterial,
        titleFontSizeIos,
        titleFontSizeMaterial,
        bgClassName,
        innerClassName,
        leftClassName,
        titleClassName,
        subtitleClassName,
        rightClassName,
        subnavbarClassName,
      },
      colors,
      className
    ),
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
