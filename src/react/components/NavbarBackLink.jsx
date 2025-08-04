import React, { useRef } from 'react';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import BackIcon from './icons/BackIcon.jsx';
import Link from './Link.jsx';
import { NavbarBackLinkClasses } from '../../shared/classes/NavbarBackLinkClasses.js';

const NavbarBackLink = (props) => {
  const {
    component = 'a',
    className,
    text = 'Back',

    showText,

    ios,
    material,

    onClick,

    // Children
    children,

    ref,

    // Rest
    ...rest
  } = props;

  const elRef = useRef(null);

  const attrs = {
    ...rest,
  };

  const theme = useTheme({ ios, material });
  const themeClasses = useThemeClasses({ ios, material });

  const c = themeClasses(NavbarBackLinkClasses(), className);

  return (
    <Link
      ref={(el) => {
        elRef.current = el;
        if (ref && typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
      component={component}
      className={c.base}
      {...attrs}
      onClick={onClick}
    >
      <span className={c.icon}>
        <BackIcon theme={theme} />
      </span>
      {showText && <span>{text}</span>}
      {children}
    </Link>
  );
};

NavbarBackLink.displayName = 'NavbarBackLink';

export default NavbarBackLink;
