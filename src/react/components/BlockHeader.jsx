import React, { useRef } from 'react';
import { BlockHeaderClasses } from '../../shared/classes/BlockHeaderClasses.js';
import { BlockHeaderColors } from '../../shared/colors/BlockHeaderColors.js';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';

const BlockHeader = (props) => {
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

  const Component = component;

  const attrs = {
    ...rest,
  };

  const theme = useTheme();

  const isInset =
    typeof inset === 'undefined'
      ? theme === 'ios'
        ? insetIos
        : insetMaterial
      : inset;

  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const colors = BlockHeaderColors(colorsProp, dark);

  const c = themeClasses(
    BlockHeaderClasses({ ...props, inset: isInset }, colors),
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

BlockHeader.displayName = 'BlockHeader';

export default BlockHeader;
