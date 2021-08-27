import React from 'react';
import { cls } from '../shared/cls.js';
import { positionClass } from '../shared/position-class.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';

const Popup = (props) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,

    size = 'w-screen h-screen md:w-160 md:h-160',
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
          'left-1/2 top-1/2 transition-transform transform -translate-x-1/2 duration-400 z-40 md:rounded max-w-full max-h-full overflow-hidden',
          colors.bg,
          positionClass('fixed', className),
          size
        ),
        ios: '',
        material: 'shadow-2xl',
        opened: '-translate-y-1/2',
        closed: 'translate-y-full',
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

export default Popup;
