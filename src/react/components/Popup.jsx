import React, { useRef } from 'react';
import { PopupClasses } from '../../shared/classes/PopupClasses.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { PopupColors } from '../../shared/colors/PopupColors.js';

const Popup = (props) => {
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

  const colors = PopupColors(colorsProp, dark);

  const c = themeClasses(PopupClasses(props, colors, className));

  return (
    <>
      {backdrop && (
        <div className={c.backdrop[state]} onClick={onBackdropClick} />
      )}
      <Component
        ref={(el) => {
          elRef.current = el;
          if (ref && typeof ref === 'function') ref(el);
          else if (ref) ref.current = el;
        }}
        className={c.base[state]}
        {...attrs}
      >
        {children}
      </Component>
    </>
  );
};

Popup.displayName = 'Popup';

export default Popup;
