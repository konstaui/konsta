import React from 'react';
import { cls } from '../shared/cls.js';
import { positionClass } from '../shared/position-class.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';

const Sheet = (props) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,

    opened,
    backdrop = true,
    onBackdropClick,

    ios,
    material,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const state = opened ? 'opened' : 'closed';

  const Component = component;

  const attrs = {
    ...rest,
  };

  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const colors = {
    bg: cls('bg-white', dark('dark:bg-black')),
    ...colorsProp,
  };

  const c = themeClasses(
    {
      base: {
        common: cls(
          'left-0 top-full transition-transform duration-400 z-40 overflow-hidden',
          colors.bg,
          positionClass('fixed', className)
        ),
        ios: '',
        material: 'shadow-2xl',
        opened: '-translate-y-full',
        closed: '',
      },
      backdrop: {
        common:
          'fixed z-40 w-full h-full left-0 top-0 bg-black bg-opacity-50 duration-400',
        opened: '',
        closed: 'opacity-0 pointer-events-none',
      },
    },
    className
  );

  return (
    <>
      {backdrop && (
        <div className={c.backdrop[state]} onClick={onBackdropClick} />
      )}
      <Component className={c.base[state]} {...attrs}>
        {children}
      </Component>
    </>
  );
};

export default Sheet;
