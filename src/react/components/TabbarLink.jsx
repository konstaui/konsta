import React, { useRef } from 'react';
import { TabbarLinkClasses } from '../../shared/classes/TabbarLinkClasses.js';
import { TabbarLinkColors } from '../../shared/colors/TabbarLinkColors.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';

import Link from './Link.jsx';

const TabbarLink = (props) => {
  const {
    className,
    active,
    ref,
    ios,
    material,
    colors: colorsProp,
    linkProps = {},

    icon,
    label,

    children,
    ...rest
  } = props;

  const elRef = useRef(null);

  const attrs = {
    ...linkProps,
    ...rest,
  };
  const dark = useDarkClasses();
  const colors = TabbarLinkColors(colorsProp, dark);
  const themeClasses = useThemeClasses({ ios, material });

  const hasIcon = !!icon;
  const hasLabel = label || (children && children.length);
  const c = themeClasses(
    TabbarLinkClasses({ hasLabel, hasIcon, active }, colors)
  );

  return (
    <Link
      ref={(el) => {
        elRef.current = el;
        if (ref && typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
      tabbar
      tabbarActive={active}
      className={className}
      {...attrs}
    >
      <span className={c.content}>
        {icon && (
          <span className={c.iconContainer}>
            <span className={c.iconBg} />
            {icon}
          </span>
        )}
        {(label || (children && children.length)) && (
          <span className={c.label}>
            {label}
            {children}
          </span>
        )}
      </span>
    </Link>
  );
};

TabbarLink.displayName = 'TabbarLink';

export default TabbarLink;
