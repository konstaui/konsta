import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';

const BlockTitle = forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    withBlock = true,

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
      base: {
        common: `px-4 mt-8 flex justify-between items-center ${
          withBlock ? '-mb-6' : 'mb-2'
        }`,
        ios: `font-semibold`,
        material: `font-medium`,
      },
    },
    className
  );

  return (
    <Component ref={elRef} className={c.base} {...attrs}>
      {children}
    </Component>
  );
});

BlockTitle.displayName = 'BlockTitle';

export default BlockTitle;
