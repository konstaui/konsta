import React, { useRef } from 'react';
import { BreadcrumbsCollapsedClasses } from '../../shared/classes/BreadcrumbsCollapsedClasses.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { BreadcrumbsCollapsedColors } from '../../shared/colors/BreadcrumbsCollapsedColors.js';

const BreadcrumbsCollapsed = (props) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,

    ios,
    material,

    // Children
    children,

    ref,

    // Rest
    ...rest
  } = props;

  const elRef = useRef(null);

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
      ref={(el) => {
        elRef.current = el;
        if (ref && typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
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
};

BreadcrumbsCollapsed.displayName = 'BreadcrumbsCollapsed';

export default BreadcrumbsCollapsed;
