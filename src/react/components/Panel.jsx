import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { cls } from '../shared/cls.js';
import { positionClass } from '../shared/position-class.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';

const Panel = forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,

    size = 'w-72 h-screen',
    side = 'left',
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

  const elRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

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
          'top-0 transition-transform transform duration-400 z-40 max-w-full max-h-full overflow-hidden',
          colors.bg,
          positionClass('fixed', className),
          size
        ),
        ios: '',
        material: 'shadow-2xl',
      },
      left: {
        common: cls('no-safe-areas-right left-0'),
        opened: 'translate-x-0',
        closed: '-translate-x-full',
      },
      right: {
        common: cls('no-safe-areas-left left-full'),
        opened: '-translate-x-full',
        closed: 'translate-x-0',
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

  const classes = cls(c.base, c[side][state]);

  return (
    <>
      {backdrop && (
        <div className={c.backdrop[state]} onClick={onBackdropClick} />
      )}
      <Component ref={elRef} className={classes} {...attrs}>
        {children}
      </Component>
    </>
  );
});

Panel.displayName = 'Panel';

export default Panel;
