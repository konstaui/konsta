import React, { useRef } from 'react';
import { BlockClasses } from '../../shared/classes/BlockClasses.js';
import { cls } from '../../shared/cls.js';
import { BlockColors } from '../../shared/colors/BlockColors.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTheme } from '../shared/use-theme.js';
import { getThemeSpecificProps } from '../shared/get-theme-specific-props.js';

const Block = (props) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,

    inset,
    insetIos,
    insetMaterial,
    strong,
    strongIos,
    strongMaterial,
    outline,
    outlineIos,
    outlineMaterial,

    nested,

    ios,
    material,

    ref,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const elRef = useRef(null);

  const Component = component;

  const attrs = {
    ...rest,
  };

  const theme = useTheme({ ios, material });
  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const colors = BlockColors(colorsProp, dark);

  const {
    strong: isStrong,
    outline: isOutline,
    inset: isInset,
  } = getThemeSpecificProps(
    theme,
    {
      strong,
      outline,
      inset,
    },
    props
  );

  const c = themeClasses(
    BlockClasses(
      {
        ...props,
        inset: isInset,
        strong: isStrong,
        outline: isOutline,
      },
      colors
    )
  );

  const classes = cls(
    // base
    c.base,

    // inset
    isInset && c.inset,

    className
  );

  return (
    <Component
      ref={(el) => {
        elRef.current = el;
        if (ref && typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
      className={classes}
      {...attrs}
    >
      {children}
    </Component>
  );
};

Block.displayName = 'Block';

export default Block;
