import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { BreadcrumbsSeparatorClasses } from '../../shared/classes/BreadcrumbsSeparatorClasses.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import ChevronIcon from './icons/ChevronIcon.jsx';

const BreadcrumbsSeparator = forwardRef((props, ref) => {
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

  const c = themeClasses(BreadcrumbsSeparatorClasses({ ...props }), className);

  return (
    <Component ref={elRef} className={c.base} {...attrs}>
      <ChevronIcon className={c.icon} />
      {children}
    </Component>
  );
});

BreadcrumbsSeparator.displayName = 'BreadcrumbsSeparator';

export default BreadcrumbsSeparator;
