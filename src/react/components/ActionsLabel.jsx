import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { ActionsLabelClasses } from '../../shared/classes/ActionsLabelClasses.js';
import { ActionsLabelColors } from '../../shared/colors/ActionsLabelColors.js';

const ActionsLabel = forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,

    ios,
    material,

    fontSizeIos = 'text-sm',
    fontSizeMaterial = 'text-sm',

    hairlines = true,

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

  const colors = ActionsLabelColors(colorsProp, dark);

  const c = themeClasses(
    ActionsLabelClasses(
      { fontSizeIos, fontSizeMaterial, hairlines, ...props },
      colors
    ),
    className
  );

  return (
    <Component ref={elRef} className={c.base} {...attrs}>
      {children}
    </Component>
  );
});

ActionsLabel.displayName = 'ActionsLabel';

export default ActionsLabel;
