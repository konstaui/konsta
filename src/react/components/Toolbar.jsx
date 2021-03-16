import React from 'react';
import { cls } from '../shared/cls';
import { positionClass } from '../shared/position-class';
import { useTheme } from '../shared/use-theme';
import { useThemeClasses } from '../shared/use-theme-classes';

const Toolbar = (props) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    translucent = true,

    bgClassName = '',
    innerClassName = '',

    tabbar,
    tabbarLabels,

    top,

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
        common: cls('absolute w-full h-full left-0 top-0', bgClassName),
        ios: cls(
          top ? 'hairline-b' : 'hairline-t',
          colors.bg,
          translucent && 'translucent'
        ),
        material: cls(`shadow-md ${colors.bg}`, !top && 'transform rotate-180'),
      },
      inner: {
        common: cls(
          `flex relative justify-between items-center w-full h-full overflow-hidden`,
          innerClassName
        ),
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
