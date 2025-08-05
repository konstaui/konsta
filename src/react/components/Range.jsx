import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { cls } from '../../shared/cls.js';
import { RangeClasses } from '../../shared/classes/RangeClasses.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { RangeColors } from '../../shared/colors/RangeColors.js';
import { useTheme } from '../shared/use-theme.js';

const Range = (props) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
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
    ref,

    // Rest
    ...rest
  } = props;

  const thumbWrapRef = useRef(null);
  const trackBgRef = useRef(null);
  const Component = component;
  const [thumbOffset, setThumbOffset] = useState(0);
  const [thumbPercentOffset, setThumbPercentOffset] = useState(0);

  const attrs = {
    ...rest,
  };
  const theme = useTheme();
  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const colors = RangeColors(colorsProp, dark);

  const c = themeClasses(RangeClasses(props, colors, dark), className);

  const valueWidth = (((value || 0) - min) / (max - min)) * 100;

  const calcThumbOffset = () => {
    if (!thumbWrapRef.current) return;
    const thumbWidth = thumbWrapRef.current.offsetWidth;
    const trackWidth = trackBgRef.current.offsetWidth;
    const percentOffset = thumbWidth / trackWidth;
    setThumbPercentOffset(percentOffset);
  };
  const updateThumbOffset = () => {
    const percent = (value - min) / (max - min);
    setThumbOffset(percent * (1 - thumbPercentOffset));
  };
  const onResize = () => {
    calcThumbOffset();
    updateThumbOffset();
  };
  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  });
  useLayoutEffect(() => {
    calcThumbOffset();
  }, []);
  useLayoutEffect(() => {
    updateThumbOffset();
  }, [value]);

  return (
    <Component
      ref={(el) => {
        if (ref && typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
      className={c.base}
      {...attrs}
    >
      <span ref={trackBgRef} className={c.trackBg} />
      <span
        className={c.trackValue}
        style={{
          width:
            theme === 'ios' ? `${valueWidth}%` : `calc(${thumbOffset * 100}%)`,
        }}
      />
      {theme === 'material' && (
        <>
          <span
            className={c.trackEmpty}
            style={{ width: `calc(${100 - thumbOffset * 100}% - 16px)` }}
          />
          <span className={c.stop} />
        </>
      )}
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
      <span
        style={{ insetInlineStart: `${thumbOffset * 100}%` }}
        className={c.thumbWrap}
        ref={thumbWrapRef}
      >
        {theme === 'ios' && <span className={c.thumbShadow} />}

        <span className={c.thumb} />
      </span>
    </Component>
  );
};

Range.displayName = 'Range';

export default Range;
