import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { ActionsGroupClasses } from '../../shared/classes/ActionsGroupClasses.js';

const ActionsGroup = forwardRef((props, ref) => {
  const {
    component = 'div',
    className,

    ios,
    material,

    hairlines = true,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const rippleElRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: rippleElRef.current,
  }));

  const Component = component;

  const attrs = {
    ...rest,
  };

  const themeClasses = useThemeClasses({ ios, material });

  const c = themeClasses(
    ActionsGroupClasses({ hairlines, ...props }),
    className
  );

  return (
    <Component ref={rippleElRef} className={c.base} {...attrs}>
      {children}
    </Component>
  );
});

ActionsGroup.displayName = 'ActionsGroup';

export default ActionsGroup;
