import React from 'react';
import { useTheme } from '../shared/use-theme';

const Toolbar = (props) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,

    position = 'relative',
    tabbar,
    tabbarLabels,

    top,

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
    ...colorsProp,
  };

  const c = themeClasses(
    {
      base: {
        common: `w-full ${position} z-50`,
        toolbar: {
          ios: 'h-11',
          material: 'h-12',
        },
        tabbarLabels: {
          ios: 'h-12.5',
          material: 'h-14',
        },
      },
      bg: {
        common: 'absolute w-full h-full left-0 top-0',
        ios: `${top ? 'hairline-b' : 'hairline-t'} ${colors.bg}`,
        material: `shadow-md ${colors.bg} ${
          !top ? 'transform rotate-180' : ''
        }`,
      },
      inner: {
        common: `flex relative justify-between items-center w-full h-full`,
        ios: 'px-2',
        material: !tabbar ? 'px-2' : '',
      },
    },
    className
  );

  return (
    <Component
      className={c.base[tabbar && tabbarLabels ? 'tabbarLabels' : 'toolbar']}
      {...attrs}
    >
      <div className={c.bg} />
      <div className={c.inner}>{children}</div>
    </Component>
  );
};

export default Toolbar;
