import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import BackIcon from './icons/BackIcon.jsx';
import Link from './Link.jsx';
import { NavbarBackLinkClasses } from '../../shared/classes/NavbarBackLinkClasses.js';

const NavbarBackLink = forwardRef((props, ref) => {
  const {
    component = 'a',
    className,

    text = 'Back',

    showText = 'auto',

    ios,
    material,

    onClick,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const elRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  const attrs = {
    ...rest,
  };

  const theme = useTheme({ ios, material });
  const themeClasses = useThemeClasses({ ios, material });

  const shouldShowText =
    (showText === 'auto' && theme === 'ios') || showText === true;

  const c = themeClasses(NavbarBackLinkClasses(), className);

  return (
    <Link
      ref={elRef}
      component={component}
      className={c.base}
      navbar
      {...attrs}
      onClick={onClick}
    >
      <span className={c.icon}>
        <BackIcon theme={theme} />
      </span>
      {shouldShowText && <span>{text}</span>}
      {children}
    </Link>
  );
});

NavbarBackLink.displayName = 'NavbarBackLink';

export default NavbarBackLink;
