import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { PopupClasses } from '../../shared/classes/PopupClasses.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { PopupColors } from '../../shared/colors/PopupColors.js';

const Popup = forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,

    size = 'w-screen h-screen md:w-160 md:h-160',
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

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  const state = opened ? 'opened' : 'closed';

  const Component = component;

  const attrs = {
    ...rest,
  };

  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const colors = PopupColors(colorsProp, dark);

  const c = themeClasses(
    PopupClasses({ ...props, size }, colors, className),
    className
  );

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
});

Popup.displayName = 'Popup';

export default Popup;
