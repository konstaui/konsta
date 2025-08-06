import React, { useRef } from 'react';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';
import { ListButtonClasses } from '../../shared/classes/ListButtonClasses.js';
import { ListButtonColors } from '../../shared/colors/ListButtonColors.js';
import { useList } from '../shared/use-list.js';

const ListButton = (props) => {
  const {
    component = 'li',
    className,
    colors: colorsProp,

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

    // Children
    children,

    ref,

    // Rest
    ...rest
  } = props;

  const elRef = useRef(null);
  const rippleElRef = useRef(null);
  const listContext = useList();
  const dividers = listContext?.dividers;

  const Component = component;

  const attrs = {
    ...rest,
  };

  const theme = useTheme({ ios, material });
  const themeClasses = useThemeClasses({ ios, material });

  useTouchRipple(rippleElRef, theme === 'material');

  const dark = useDarkClasses();

  const colors = ListButtonColors(colorsProp, dark);

  const c = themeClasses(
    ListButtonClasses({ ...props, dividers }, colors),
    className
  );

  const isLink = !!href || href === '';
  const hrefComputed =
    !isLink || href === true || href === false ? undefined : href || '';
  const buttonAttrs = { href: hrefComputed, target, type, value, ...linkProps };

  const ButtonComponent = isLink ? linkComponent : 'button';

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
      <ButtonComponent ref={rippleElRef} className={c.button} {...buttonAttrs}>
        {children}
      </ButtonComponent>
    </Component>
  );
};

ListButton.displayName = 'ListButton';

export default ListButton;
