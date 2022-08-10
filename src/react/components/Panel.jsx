import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { cls } from '../../shared/cls.js';
import { PanelClasses } from '../../shared/classes/PanelClasses.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { PanelColors } from '../../shared/colors/PanelColors.js';

const Panel = forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,

    size = 'w-72 h-screen',
    side = 'left',
    opened,
    backdrop = true,
    floating = false,
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

  const colors = PanelColors(colorsProp, dark);

  const c = themeClasses(
    PanelClasses({ ...props, size, floating }, colors, className),
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
