import React, { useRef } from 'react';
import { BreadcrumbsItemClasses } from '../../shared/classes/BreadcrumbsItemClasses.js';
import { BreadcrumbsItemColors } from '../../shared/colors/BreadcrumbsItemColors.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';

const BreadcrumbsItem = (props) => {
  const {
    component = 'div',
    className,

    ios,
    material,

    colors: colorsProp,

    active,

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

  const dark = useDarkClasses();

  const colors = BreadcrumbsItemColors(colorsProp, dark);

  const c = themeClasses(
    BreadcrumbsItemClasses({ ...props }, colors),
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
      role="menuitem"
      tabIndex="0"
      {...attrs}
    >
      {children}
    </Component>
  );
};

BreadcrumbsItem.displayName = 'BreadcrumbsItem';

export default BreadcrumbsItem;
