import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { TabbarLinkClasses } from '../../shared/classes/TabbarLinkClasses.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';

import Link from './Link.jsx';

const TabbarLink = forwardRef((props, ref) => {
  const {
    className,
    active,

    ios,
    material,

    icon,
    label,

    children,
    ...rest
  } = props;

  const elRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  const attrs = {
    ...rest,
  };

  const themeClasses = useThemeClasses({ ios, material });

  const c = themeClasses(TabbarLinkClasses());

  return (
    <Link
      ref={elRef}
      tabbar
      tabbarActive={active}
      className={className}
      {...attrs}
    >
      {icon && label ? (
        <span className={c.content}>
          <span className={c.icon}>{icon}</span>
          <span className={c.label}>{label}</span>
        </span>
      ) : (
        <>
          {label}
          {children}
        </>
      )}
    </Link>
  );
});

TabbarLink.displayName = 'TabbarLink';

export default TabbarLink;
