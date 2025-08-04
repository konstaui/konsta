import React, { useRef } from 'react';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { ActionsLabelClasses } from '../../shared/classes/ActionsLabelClasses.js';
import { ActionsLabelColors } from '../../shared/colors/ActionsLabelColors.js';

const ActionsLabel = (props) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,

    ios,
    material,

    fontSizeIos = 'text-sm',
    fontSizeMaterial = 'text-sm',

    dividers = undefined,

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

  const theme = useTheme({ ios, material });
  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const colors = ActionsLabelColors(colorsProp, dark);

  const isDividers =
    typeof dividers === 'undefined' ? theme === 'ios' : dividers;

  const c = themeClasses(
    ActionsLabelClasses(
      { fontSizeIos, fontSizeMaterial, dividers: isDividers, ...props },
      colors
    ),
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

ActionsLabel.displayName = 'ActionsLabel';

export default ActionsLabel;
