import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { CardClasses } from '../../shared/classes/CardClasses.js';
import { cls } from '../../shared/cls.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';

const Card = forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    margin = 'm-4',
    colors: colorsProp,
    header,
    footer,

    ios,
    material,

    // Style
    outline,

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
  const dark = useDarkClasses();

  const colors = {
    bg: cls(`bg-block-strong-light`, dark('dark:bg-block-strong-dark')),
    footerText: cls(`text-black`, dark('dark:text-white')),
    ...colorsProp,
  };

  const style = outline ? 'outline' : 'shadow';

  const c = themeClasses(
    CardClasses({ ...props, margin }, colors, dark),
    className
  );

  return (
    <Component ref={elRef} className={c.base[style]} {...attrs}>
      {header && <div className={c.header}>{header}</div>}
      <div className={c.content}>{children}</div>
      {footer && <div className={c.footer}>{footer}</div>}
    </Component>
  );
});

Card.displayName = 'Card';

export default Card;
