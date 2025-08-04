import React, { useRef } from 'react';
import { BreadcrumbsClasses } from '../../shared/classes/BreadcrumbsClasses.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';

const Breadcrumbs = (props) => {
  const {
    component = 'div',
    className,

    fontSizeIos = 'text-[17px]',
    fontSizeMaterial = 'text-[14px]',

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

  const themeClasses = useThemeClasses({ ios, material });

  const c = themeClasses(
    BreadcrumbsClasses({ ...props, fontSizeIos, fontSizeMaterial }),
    className
  );

  return (
    <Component
      ref={(el) => {
        elRef.current = el;
        if (ref && typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
      className={c.base}
      {...attrs}
    >
      {children}
    </Component>
  );
};

Breadcrumbs.displayName = 'Breadcrumbs';

export default Breadcrumbs;
