import React from 'react';
import { cls } from '../shared/cls.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';

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
    readonly,
    disabled,
    step,
    min = 0,
    max = 100,
    onChange,
    onFocus,
    onBlur,

    // Rest
    ...rest
  } = props;

  const Component = component;

  const attrs = {
    ...rest,
  };

  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const colors = {
    valueBg: 'bg-primary',
    thumbBgIos: 'range-thumb:bg-white',
    thumbBgMaterial: 'range-thumb:bg-primary',
    ...colorsProp,
  };

  const c = themeClasses(
    {
      base: {
        common: 'block relative select-none w-full self-center touch-pan-y',
        ios: 'h-7',
        material: 'h-5',
      },
      trackBg: {
        common: cls(
          'absolute top-1/2 left-0 w-full transform -translate-y-1/2 bg-black bg-opacity-20',
          dark('dark:bg-white dark:bg-opacity-20')
        ),
        ios: 'h-1 rounded-full',
        material: 'h-0.5',
      },
      trackValue: {
        common: `absolute top-1/2 left-0 w-full transform -translate-y-1/2 ${colors.valueBg}`,
        ios: 'h-1 rounded-full',
        material: 'h-0.5',
      },
      input: {
        common:
          'appearance-none w-full bg-transparent cursor-pointer block focus:outline-none relative',
        ios: 'h-7',
        material: 'h-5',
      },

      inputThumb: {
        common:
          'range-thumb:relative range-thumb:appearance-none range-thumb:rounded-full range-thumb:border-none',
        ios: `range-thumb:w-7 range-thumb:h-7 range-thumb:-mt-3.5 ${colors.thumbBgIos} range-thumb:shadow-ios-toggle`,
        material: `range-thumb:w-3 range-thumb:h-3 ${colors.thumbBgMaterial} range-thumb:-mt-1.5 range-thumb:transform range-thumb:duration-200 active:range-thumb:scale-150`,
      },
      inputTrack: {
        common: 'range-track:appearance-none range-track:h-px',
      },
    },
    className
  );

  const valueWidth = (((value || 0) - min) / (max - min)) * 100;

  return (
    <Component className={c.base} {...attrs}>
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
        readOnly={readonly}
        disabled={disabled}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </Component>
  );
};

export default Range;
