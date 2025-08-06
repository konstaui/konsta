import React, { useRef } from 'react';
import { ToggleClasses } from '../../shared/classes/ToggleClasses.js';
import { ToggleColors } from '../../shared/colors/ToggleColors.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTheme } from '../shared/use-theme.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';

const Toggle = (props) => {
  const {
    component = 'label',
    className,
    colors: colorsProp,
    defaultChecked,
    checked,
    name,
    value,
    disabled,
    readOnly,
    onChange,

    ios,
    material,

    // Children
    children,

    ref,

    // Rest
    ...rest
  } = props;

  const elRef = useRef(null);
  const rippleTargetElRef = useRef(null);

  const Component = component;

  const attrs = {
    ...rest,
  };

  const theme = useTheme({ ios, material });
  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  useTouchRipple(rippleTargetElRef, theme === 'material', elRef);

  const colors = ToggleColors(colorsProp, dark);

  const state =
    checked || (defaultChecked && !onChange) ? 'checked' : 'notChecked';

  const c = themeClasses(ToggleClasses(props, colors, dark), className);

  return (
    <Component
      ref={(el) => {
        elRef.current = el;
        if (ref && typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
      className={c.base[state]}
      {...attrs}
    >
      <input
        type="checkbox"
        name={name}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        className={c.input}
      />
      {theme === 'ios' ? (
        <>
          <span className={c.thumbSide[state]} />
          <span className={c.thumbBg[state]} />
          <span className={c.thumbShadow[state]} />
          <span ref={rippleTargetElRef} className={c.thumbWrap[state]}>
            <span className={c.thumb[state]} />
          </span>
        </>
      ) : (
        <span ref={rippleTargetElRef} className={c.thumbWrap[state]}>
          <span className={c.thumb[state]} />
        </span>
      )}

      {children}
    </Component>
  );
};

Toggle.displayName = 'Toggle';

export default Toggle;
