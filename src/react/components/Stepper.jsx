import React from 'react';
import { cls } from '../shared/cls';
import { useTheme } from '../shared/use-theme';

const Stepper = (props) => {
  const {
    component = 'span',
    className,
    colors: colorsProp,

    value,
    defaultValue,
    input = false,
    inputType = 'text',
    inputPlaceholder,
    inputDisabled,
    inputReadonly,

    buttonsOnly,

    rounded,
    small,
    large,
    raised,
    outline,

    onChange,
    onFocus,
    onBlur,
    onMinus,
    onPlus,

    ios,
    material,

    children,
    ...rest
  } = props;

  const Component = component;

  const { themeClasses } = useTheme({ ios, material });

  const colors = {
    text: 'text-primary',
    border: 'border-primary',
    bg: 'bg-primary',
    activeBg: 'active:bg-primary',
    activeBgDark: 'active:bg-primary-dark',
    ...colorsProp,
  };

  const size = large ? 'large' : small ? 'small' : 'medium';
  const style = outline && raised ? 'clear' : outline ? 'outline' : 'fill';
  const shape = rounded ? 'rounded' : 'square';

  const c = themeClasses({
    base: `${colors.text} inline-flex items-stretch`,
    raised: 'shadow',
    size: {
      small: 'h-7',
      medium: {
        ios: `h-7`,
        material: `h-9`,
      },
      large: {
        ios: `h-11`,
        material: `h-12`,
      },
    },
    shape: {
      square: 'rounded',
      rounded: 'rounded-full',
    },
    button: {
      common: 'relative flex items-center justify-center w-10 cursor-pointer',
    },
    buttonLeftShape: {
      square: 'rounded-l',
      rounded: 'rounded-l-full',
    },
    buttonRightShape: {
      square: 'rounded-r',
      rounded: 'rounded-r-full',
    },
    buttonStyle: {
      fill: `text-white ${colors.bg} ${colors.activeBgDark} ${
        buttonsOnly ? 'first:border-r border-black border-opacity-10' : ''
      }`,
      outline: `border-2 ${colors.border} ${colors.text} ${
        colors.activeBg
      } active:bg-opacity-15 ${buttonsOnly ? 'first:border-r-0' : ''}`,
      clear: `${colors.text} ${colors.activeBg} active:bg-opacity-15 last:border-l border-black border-opacity-10`,
    },
    input: {
      common: 'focus:outline-none text-center appearance-none',
    },
    value: {
      common: `w-11 flex items-center justify-center ${colors.text} font-medium`,
      ios: 'text-base',
      material: 'text-sm',
      fill: `border-t-2 border-b-2 ${colors.border} ${colors.text}`,
      outline: `border-t-2 border-b-2 ${colors.border} ${colors.text}`,
      clear: 'border-l border-black border-opacity-10',
    },
    hBar: 'w-4 h-0.5 bg-current block',
    vBar:
      'w-0.5 h-4 bg-current block absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2',
  });

  const attrs = {
    ...rest,
  };

  const classes = cls(
    c.base,
    raised && c.raised,
    c.size[size],
    c.shape[shape],
    className
  );
  const buttonLeftClasses = cls(
    c.button,
    c.buttonStyle[style],
    c.buttonLeftShape[shape]
  );
  const buttonRightClasses = cls(
    c.button,
    c.buttonStyle[style],
    c.buttonRightShape[shape]
  );

  const valueClasses = cls(input && c.input, c.value[style]);

  return (
    <Component className={classes} {...attrs}>
      <span className={buttonLeftClasses} onClick={onMinus}>
        <span className={c.hBar} />
      </span>
      {input && !buttonsOnly && (
        <input
          className={valueClasses}
          placeholder={inputPlaceholder}
          type={inputType}
          value={value}
          defaultValue={defaultValue}
          disabled={inputDisabled}
          readOnly={inputReadonly}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      )}
      {!input && !buttonsOnly && <span className={valueClasses}>{value}</span>}

      <span className={buttonRightClasses} onClick={onPlus}>
        <span className={c.hBar} />
        <span className={c.vBar} />
      </span>
    </Component>
  );
};

export default Stepper;
