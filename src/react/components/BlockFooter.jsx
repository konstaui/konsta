import React, { useRef } from 'react';
import { BlockFooterClasses } from '../../shared/classes/BlockFooterClasses.js';
import { BlockFooterColors } from '../../shared/colors/BlockFooterColors.js';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';

const BlockFooter = (props) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,

    ios,
    material,

    inset,
    insetIos,
    insetMaterial,

    // Children
    children,

    ref,

    // Rest
    ...rest
  } = props;

  const elRef = useRef(null);

  const theme = useTheme();

  const isInset =
    typeof inset === 'undefined'
      ? theme === 'ios'
        ? insetIos
        : insetMaterial
      : inset;

  const Component = component;

  const attrs = {
    ...rest,
  };

  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const colors = BlockFooterColors(colorsProp, dark);

  const c = themeClasses(
    BlockFooterClasses({ ...props, inset: isInset }, colors),
    className
  );

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
      {children}
    </Component>
  );
};

BlockFooter.displayName = 'BlockFooter';

export default BlockFooter;
