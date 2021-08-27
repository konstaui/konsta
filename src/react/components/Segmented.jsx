import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { cls } from '../shared/cls.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';

const Segmented = forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,

    ios,
    material,

    // Style props
    raised,
    outline,
    strong,
    rounded,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const elRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  const Component = component;

  const attrs = {
    ...rest,
  };

  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const colors = {
    border: 'border-primary',
    divide: 'divide-primary',
    ...colorsProp,
  };

  const c = themeClasses({
    base: {
      common: `flex justify-center items-center overflow-hidden w-full`,
      square: 'rounded',
      rounded: 'rounded-full',
    },
    raised: outline
      ? 'shadow'
      : `shadow divide-x divide-black divide-opacity-10`,
    outline: `border-2 ${colors.border}`,
    outlineInner: `-m-0.5 flex w-full justify-center items-center divide-x-2 ${colors.divide}`,
    strong: cls(
      'p-1 bg-black bg-opacity-5 space-x-1',
      dark('dark:bg-white dark:bg-opacity-10')
    ),
  });

  const classes = cls(
    // base
    rounded ? c.base.rounded : c.base.square,
    raised && c.raised,
    outline && c.outline,
    strong && c.strong,

    className
  );

  return (
    <Component ref={elRef} className={classes} {...attrs}>
      {outline ? <span className={c.outlineInner}>{children}</span> : children}
    </Component>
  );
});

Segmented.displayName = 'Segmented';

export default Segmented;
