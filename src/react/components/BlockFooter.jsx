import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import { BlockFooterClasses } from '../../shared/classes/BlockFooterClasses.js';
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

  const c = themeClasses(BlockFooterClasses(), className);

  return (
    <Component ref={elRef} className={c.base} {...attrs}>
      {children}
    </Component>
  );
});

BlockFooter.displayName = 'BlockFooter';

export default BlockFooter;
