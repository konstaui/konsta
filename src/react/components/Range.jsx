import React, { useRef } from 'react';
import { cls } from '../../shared/cls.js';
import { RangeClasses } from '../../shared/classes/RangeClasses.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { RangeColors } from '../../shared/colors/RangeColors.js';

const Range = (props) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    ref,
    ios,
    material,

    // Children
    children,

    inputId,
    name,
    value = undefined,
    defaultValue,
    readOnly,
    disabled,
    step = 1,
    min = 0,
    max = 100,
    onInput,
    onChange,
    onFocus,
    onBlur,

    // Rest
    ...rest
  } = props;

  const elRef = useRef(null);

  const Component = component;

  const attrs = {
    ...rest,
  };

  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const colors = RangeColors(colorsProp, dark);

  const c = themeClasses(RangeClasses(props, colors, dark), className);

  const valueWidth = (((value || 0) - min) / (max - min)) * 100;

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
      <span className={c.trackBg} />
      <span className={c.trackValue} style={{ width: `${valueWidth}%` }} />
      <input
        className={cls(c.input, c.inputThumb, c.inputTrack)}
        type="range"
        id={inputId}
        name={name}
        min={min}
        max={max}
        step={step}
        value={value}
        defaultValue={defaultValue}
        readOnly={readOnly}
        disabled={disabled}
        onInput={onInput}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </Component>
  );
};

Range.displayName = 'Range';

export default Range;
