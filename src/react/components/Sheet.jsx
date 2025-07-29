import React, { useRef } from 'react';
import { SheetClasses } from '../../shared/classes/SheetClasses.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { SheetColors } from '../../shared/colors/SheetColors.js';

const Sheet = (props) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    ref,
    opened,
    backdrop = true,
    onBackdropClick,

    ios,
    material,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const elRef = useRef(null);

  const state = opened ? 'opened' : 'closed';

  const Component = component;

  const attrs = {
    ...rest,
  };

  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const colors = SheetColors(colorsProp, dark);

  const c = themeClasses(SheetClasses(props, colors, className), className);

  return (
    <>
      {backdrop && (
        <div className={c.backdrop[state]} onClick={onBackdropClick} />
      )}
      <Component ref={elRef} className={c.base[state]} {...attrs}>
        {children}
      </Component>
    </>
  );
};

Sheet.displayName = 'Sheet';

export default Sheet;
