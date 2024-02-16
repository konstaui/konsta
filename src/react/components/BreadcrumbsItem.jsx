import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { BreadcrumbsItemClasses } from '../../shared/classes/BreadcrumbsItemClasses.js';
import { BreadcrumbsItemColors } from '../../shared/colors/BreadcrumbsItemColors.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';

const BreadcrumbsItem = forwardRef((props, ref) => {
  const {
    component = 'div',
    className,

    ios,
    material,

    colors: colorsProp,

    active,

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

  const colors = BreadcrumbsItemColors(colorsProp, dark);

  const c = themeClasses(
    BreadcrumbsItemClasses({ ...props }, colors),
    className
  );

  return (
    <Component
      ref={elRef}
      className={c.base}
      role="menuitem"
      tabIndex="0"
      {...attrs}
    >
      {children}
    </Component>
  );
});

BreadcrumbsItem.displayName = 'BreadcrumbsItem';

export default BreadcrumbsItem;
