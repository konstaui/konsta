import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';

const BlockFooter = forwardRef((props, ref) => {
  const {
    component = 'div',
    className,

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

  const Component = component;

  const attrs = {
    ...rest,
  };

  const themeClasses = useThemeClasses({ ios, material });

  const c = themeClasses(
    {
      base: `pl-4-safe pr-4-safe mb-8 flex items-center -mt-6 text-opacity-55 text-black text-sm`,
    },
    className
  );

  return (
    <Component ref={elRef} className={c.base} {...attrs}>
      {children}
    </Component>
  );
});

BlockFooter.displayName = 'BlockFooter';

export default BlockFooter;
