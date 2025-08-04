import React, { useRef } from 'react';
import { BreadcrumbsSeparatorClasses } from '../../shared/classes/BreadcrumbsSeparatorClasses.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import ChevronIcon from './icons/ChevronIcon.jsx';

const BreadcrumbsSeparator = (props) => {
  const {
    component = 'div',
    className,

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

  const c = themeClasses(BreadcrumbsSeparatorClasses({ ...props }), className);

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
      <ChevronIcon className={c.icon} />
      {children}
    </Component>
  );
};

BreadcrumbsSeparator.displayName = 'BreadcrumbsSeparator';

export default BreadcrumbsSeparator;
