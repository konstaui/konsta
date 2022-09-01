import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { CardClasses } from '../../shared/classes/CardClasses.js';
import { CardColors } from '../../shared/colors/CardColors.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTheme } from '../shared/use-theme.js';

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

    headerFontSizeIos = 'text-[17px]',
    headerFontSizeMaterial = 'text-[22px]',

    contentWrap = true,
    contentWrapPadding = 'p-4',

    // Style
    raised,
    raisedIos,
    raisedMaterial,
    outline,
    outlineIos,
    outlineMaterial,
    headerDivider = false,
    footerDivider = false,

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
  const theme = useTheme();
  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const colors = CardColors(colorsProp, dark);

  const isOutline =
    typeof outline === 'undefined'
      ? theme === 'ios'
        ? outlineIos
        : outlineMaterial
      : outline;
  const isRaised =
    typeof raised === 'undefined'
      ? theme === 'ios'
        ? raisedIos
        : raisedMaterial
      : raised;

  const style = isOutline ? 'outline' : isRaised ? 'raised' : 'plain';

  const c = themeClasses(
    CardClasses(
      {
        ...props,
        margin,
        contentWrapPadding,
        headerDivider,
        footerDivider,
        headerFontSizeIos,
        headerFontSizeMaterial,
        outline: isOutline,
        raised: isRaised,
      },
      colors,
      dark
    ),
    className
  );

  return (
    <Component ref={elRef} className={c.base[style]} {...attrs}>
      {header && <div className={c.header}>{header}</div>}
      {contentWrap ? <div className={c.content}>{children}</div> : children}
      {footer && <div className={c.footer}>{footer}</div>}
    </Component>
  );
});

Card.displayName = 'Card';

export default Card;
