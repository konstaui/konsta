import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { ProgressbarClasses } from '../../shared/classes/ProgressbarClasses.js';
import { ProgressbarColors } from '../../shared/colors/ProgressbarColors.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';

const Progressbar = forwardRef((props, ref) => {
  const {
    component = 'span',
    className,
    colors: colorsProp,

    ios,
    material,

    progress = 0,

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
  const colors = ProgressbarColors(colorsProp, dark);

  const c = themeClasses(ProgressbarClasses(colors), className);

  return (
    <Component ref={elRef} className={c.base} {...attrs}>
      <span
        className={c.inner}
        style={{ transform: `translateX(-${100 - (progress / 1) * 100}%)` }}
      />
      {children}
    </Component>
  );
});

Progressbar.displayName = 'Progressbar';

export default Progressbar;
