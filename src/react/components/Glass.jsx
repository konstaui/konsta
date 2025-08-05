import React, { useEffect, useRef } from 'react';
import { GlassClasses } from '../../shared/classes/GlassClasses.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTheme } from '../shared/use-theme.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useHoverable } from '../../shared/use-hoverable.js';

const Glass = (props) => {
  const {
    component = 'div',
    className,
    hoverable = true,

    ios,
    material,

    // Children
    children,

    ref,

    // Rest
    ...rest
  } = props;

  const elRef = useRef(null);

  const Component = component;

  const attrs = {
    ...rest,
  };

  const theme = useTheme();

  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const hoverableData = useRef({});
  const { attachEvents, detachEvents } = useHoverable({
    getEl: () => elRef.current,
    enabled: hoverable && theme === 'ios',
    data: hoverableData.current,
  });

  const c = themeClasses(GlassClasses({ ...props }, dark), className);

  useEffect(() => {
    attachEvents();
    return () => detachEvents();
  });

  return (
    <Component
      ref={(el) => {
        if (ref && typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
        elRef.current = el;
      }}
      className={c.base}
      {...attrs}
    >
      {children}
    </Component>
  );
};

Glass.displayName = 'Glass';

export default Glass;
