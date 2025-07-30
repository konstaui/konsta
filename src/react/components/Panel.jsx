import React, { useRef } from 'react';
import { cls } from '../../shared/cls.js';
import { PanelClasses } from '../../shared/classes/PanelClasses.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { PanelColors } from '../../shared/colors/PanelColors.js';

const Panel = (props) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    ref,
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

  const state = opened ? 'opened' : 'closed';

  const Component = component;

  const attrs = {
    ...rest,
  };

  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const colors = PanelColors(colorsProp, dark);

  const c = themeClasses(
    PanelClasses({ ...props, size, floating }, colors),
    className
  );

  const classes = cls(c.base, c[side][state]);

  return (
    <>
      {backdrop && (
        <div className={c.backdrop[state]} onClick={onBackdropClick} />
      )}
      <Component
        ref={(el) => {
          elRef.current = el;
          if (ref && typeof ref === 'function') ref(el);
          else if (ref) ref.current = el;
        }}
        className={classes}
        {...attrs}
      >
        {children}
      </Component>
    </>
  );
};

Panel.displayName = 'Panel';

export default Panel;
