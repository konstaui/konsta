import React from 'react';
import { useTheme } from '../shared/use-theme';

const Navbar = (props) => {
  const {
    tag = 'div',
    className,
    colors: colorsProp,
    position = 'relative',

    left,
    title,
    right,
    // Theme
    ios,
    material,
    children,
    ...rest
  } = props;

  const Component = tag;

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
        material: 'h-14 text-xl',
        common: 'ios:h-11 material:h-14 material:text-xl',
      },
      bg: {
        initial: 'absolute w-full h-full left-0 top-0',
        ios: `hairline-b ${colors.bg}`,
        material: `shadow-md ${colors.bg}`,
        common: `ios:hairline-b ${colors.iosBg} material:shadow-md ${colors.materialBg}`,
      },
      inner: {
        initial: 'flex relative items-center w-full h-full',
        ios: 'px-2 justify-between',
        material: 'justify-start ',
        common: 'ios:px-2 ios:justify-between material:justify-start ',
      },
      left: {
        initial: 'flex justify-center items-center h-full',
        ios: 'mr-2',
        material: 'mx-1',
        common: 'ios:mr-2 material:mx-1',
      },
      title: {
        initial: 'text-black whitespace-nowrap',
        ios:
          'font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
        material: 'font-medium mx-4',
        common:
          'ios:font-semibold ios:absolute ios:top-1/2 ios:left-1/2 ios:transform ios:-translate-x-1/2 ios:-translate-y-1/2 material:font-medium material:mx-4',
      },
      right: {
        initial: 'flex justify-center items-center h-full',
        ios: 'ml-2',
        material: 'ml-auto mr-1',
        common: 'ios:ml-2 material:ml-auto material:mr-1',
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
