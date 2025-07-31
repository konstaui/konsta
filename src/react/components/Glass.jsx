import React, { useRef } from 'react';
import { GlassClasses } from '../../shared/classes/GlassClasses.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';

const Glass = (props) => {
  const {
    component = 'div',
    className,
    ref,

    ios,
    material,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const Component = component;

  const attrs = {
    ...rest,
  };

  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const c = themeClasses(GlassClasses({ ...props }, dark), className);

  return (
    <Component ref={ref} className={c.base} {...attrs}>
      {children}
    </Component>
  );
};

Glass.displayName = 'Glass';

export default Glass;
