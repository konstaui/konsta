import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { BreadcrumbsClasses } from '../../shared/classes/BreadcrumbsClasses.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';

const Breadcrumbs = forwardRef((props, ref) => {
  const {
    component = 'div',
    className,

    fontSizeIos = 'text-[17px]',
    fontSizeMaterial = 'text-[14px]',

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
    BreadcrumbsClasses({ ...props, fontSizeIos, fontSizeMaterial }),
    className
  );

  return (
    <Component ref={elRef} className={c.base} {...attrs}>
      {children}
    </Component>
  );
});

Breadcrumbs.displayName = 'Breadcrumbs';

export default Breadcrumbs;
