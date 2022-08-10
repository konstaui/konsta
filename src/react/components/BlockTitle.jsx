import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { BlockTitleClasses } from '../../shared/classes/BlockTitleClasses.js';
import { BlockTitleColors } from '../../shared/colors/BlockTitleColors.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';

const BlockTitle = forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,

    withBlock = true,

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

  const colors = BlockTitleColors(colorsProp);

  const c = themeClasses(
    BlockTitleClasses({ ...props, withBlock }, colors),
    className
  );

  return (
    <Component ref={elRef} className={c.base} {...attrs}>
      {children}
    </Component>
  );
});

BlockTitle.displayName = 'BlockTitle';

export default BlockTitle;
