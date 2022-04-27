import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { BreadcrumbsCollapsedClasses } from '../../shared/classes/BreadcrumbsCollapsedClasses.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { cls } from '../../shared/cls.js';

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

  const colors = {
    bg: cls('bg-black bg-opacity-15', dark('dark:bg-white dark:bg-opacity-15')),
    dotBg: cls('bg-black', dark('dark:bg-white')),
    ...colorsProp,
  };

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
    <Component ref={elRef} className={c.base} {...attrs}>
      <span className={c.dot} />
      <span className={c.dot} />
      <span className={c.dot} />
      {children}
    </Component>
  );
});

BreadcrumbsCollapsed.displayName = 'BreadcrumbsCollapsed';

export default BreadcrumbsCollapsed;
