import React, { useRef } from 'react';
import { cls } from '../../shared/cls.js';
import { PanelClasses } from '../../shared/classes/PanelClasses.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { PanelColors } from '../../shared/colors/PanelColors.js';
import Glass from './Glass.jsx';
import { useTheme } from '../shared/use-theme.js';

const Panel = (props) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,

    side = 'left',
    opened,
    backdrop = true,
    floating = false,
    onBackdropClick,

    ios,
    material,

    // Children
    children,

    ref,

    // Rest
    ...rest
  } = props;

  const elRef = useRef(null);

  const state = opened ? 'opened' : 'closed';

  const Component = component;

  const attrs = {
    ...rest,
  };

  const theme = useTheme({ ios, material });

  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const colors = PanelColors(colorsProp, dark);

  const c = themeClasses(
    PanelClasses({ ...props, floating }, colors),
    className
  );

  const classes = cls(c.base, c[side][state]);

  const setRef = (el) => {
    elRef.current = el;
    if (ref && typeof ref === 'function') ref(el);
    else if (ref) ref.current = el;
  };

  return (
    <>
      {backdrop && (
        <div className={c.backdrop[state]} onClick={onBackdropClick} />
      )}
      {theme === 'ios' && floating ? (
        <Glass
          component={component}
          ref={setRef}
          className={classes}
          highlight={false}
          {...attrs}
        >
          {children}
        </Glass>
      ) : (
        <Component ref={setRef} className={classes} {...attrs}>
          {children}
        </Component>
      )}
    </>
  );
};

Panel.displayName = 'Panel';

export default Panel;
