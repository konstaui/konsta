import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { cls } from '../shared/cls.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';

const Page = forwardRef((props, ref) => {
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
  const dark = useDarkClasses();

  const c = themeClasses(
    {
      base: {
        ios: cls('bg-page-ios-light', dark('dark:bg-page-ios-dark')),
        material: cls(
          'bg-page-material-light',
          dark('dark:bg-page-material-dark')
        ),
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

Page.displayName = 'Page';

export default Page;
