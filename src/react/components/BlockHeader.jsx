import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { BlockHeaderClasses } from '../../shared/classes/BlockHeaderClasses.js';
import { BlockHeaderColors } from '../../shared/colors/BlockHeaderColors.js';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';

const BlockHeader = forwardRef((props, ref) => {
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
    <Component ref={elRef} className={c.base} {...attrs}>
      {children}
    </Component>
  );
});

BlockHeader.displayName = 'BlockHeader';

export default BlockHeader;
