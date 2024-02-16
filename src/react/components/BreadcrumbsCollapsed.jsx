import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { BreadcrumbsCollapsedClasses } from '../../shared/classes/BreadcrumbsCollapsedClasses.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { BreadcrumbsCollapsedColors } from '../../shared/colors/BreadcrumbsCollapsedColors.js';

const BreadcrumbsCollapsed = forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,

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

  const dark = useDarkClasses();

  const colors = BreadcrumbsCollapsedColors(colorsProp, dark);

  const Component = component;

  const attrs = {
    ...rest,
  };

  const themeClasses = useThemeClasses({ ios, material });

  const c = themeClasses(
    BreadcrumbsCollapsedClasses({ ...props }, colors),
    className
  );

  return (
    <Component
      ref={elRef}
      role="button"
      tabIndex="0"
      className={c.base}
      {...attrs}
    >
      <span className={c.dot} />
      <span className={c.dot} />
      <span className={c.dot} />
      {children}
    </Component>
  );
});

BreadcrumbsCollapsed.displayName = 'BreadcrumbsCollapsed';

export default BreadcrumbsCollapsed;
