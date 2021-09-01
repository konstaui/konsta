import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { cls } from '../shared/cls.js';
import { positionClass } from '../shared/position-class.js';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';

const ListButton = forwardRef((props, ref) => {
  const {
    component = 'li',
    className,
    colors: colorsProp,

    hairlines = true,

    // Link props
    href,
    target,

    // Button props
    type,
    value,

    linkComponent = 'a',
    linkProps = {},

    ios,
    material,

    touchRipple = true,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const elRef = useRef(null);
  const rippleElRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  const Component = component;

  const attrs = {
    ...rest,
  };

  const theme = useTheme({ ios, material });
  const themeClasses = useThemeClasses({ ios, material });

  useTouchRipple(rippleElRef, theme === 'material' && touchRipple);

  const colors = {
    text: 'text-primary',
    activeBg: 'active:bg-primary',
    touchRipple: 'touch-ripple-primary',
    ...colorsProp,
  };

  const c = themeClasses(
    {
      base: ``,
      button: {
        common: cls(
          positionClass('relative', className),
          hairlines && 'hairline-b active:hairline-transparent',
          `flex items-center justify-center px-4 space-x-1 active:bg-opacity-15 w-full duration-300 active:duration-0 focus:outline-none ${colors.text} ${colors.activeBg} ${colors.touchRipple} overflow-hidden select-none`
        ),
        ios: 'h-11',
        material: 'h-12',
      },
    },
    className
  );

  const isLink = !!href || href === '';
  const hrefComputed =
    !isLink || href === true || href === false ? undefined : href || '';
  const buttonAttrs = { href: hrefComputed, target, type, value, ...linkProps };

  const ButtonComponent = isLink ? linkComponent : 'button';

  return (
    <Component ref={elRef} className={c.base} {...attrs}>
      <ButtonComponent ref={rippleElRef} className={c.button} {...buttonAttrs}>
        {children}
      </ButtonComponent>
    </Component>
  );
});

ListButton.displayName = 'ListButton';

export default ListButton;
