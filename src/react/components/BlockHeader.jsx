import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { BlockHeaderClasses } from '../../shared/classes/BlockHeaderClasses.js';
import { BlockHeaderColors } from '../../shared/colors/BlockHeaderColors.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';

const BlockHeader = forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,

    ios,
    material,

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

  const colors = BlockHeaderColors(colorsProp, dark);

  const c = themeClasses(BlockHeaderClasses(props, colors), className);

  return (
    <Component ref={elRef} className={c.base} {...attrs}>
      {children}
    </Component>
  );
});

BlockHeader.displayName = 'BlockHeader';

export default BlockHeader;
