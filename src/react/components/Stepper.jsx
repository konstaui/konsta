import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { cls } from '../../shared/cls.js';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';
import { StepperClasses } from '../../shared/classes/StepperClasses.js';
import { StepperColors } from '../../shared/colors/StepperColors.js';

const Stepper = forwardRef((props, ref) => {
  const {
    component = 'span',
    className,
    colors: colorsProp,

    value = 0,
    defaultValue,
    input = false,
    inputType = 'text',
    inputPlaceholder,
    inputDisabled,
    inputReadOnly,

    buttonsOnly,

    rounded,
    roundedIos,
    roundedMaterial,
    small,
    smallIos,
    smallMaterial,
    large,
    largeIos,
    largeMaterial,
    raised,
    raisedIos,
    raisedMaterial,
    outline,
    outlineIos,
    outlineMaterial,
    onInput,
    onChange,
    onFocus,
    onBlur,
    onMinus,
    onPlus,

    ios,
    material,

    touchRipple = true,

    children,
    ...rest
  } = props;

  const elRef = useRef(null);
  const buttonLeftElRef = useRef(null);
  const buttonRightElRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  const Component = component;

  const theme = useTheme({ ios, material });
  const themeClasses = useThemeClasses({ ios, material });

  useTouchRipple(buttonLeftElRef, theme === 'material' && touchRipple);
  useTouchRipple(buttonRightElRef, theme === 'material' && touchRipple);

  const isRounded =
    typeof rounded === 'undefined'
      ? theme === 'ios'
        ? roundedIos
        : roundedMaterial
      : rounded;
  const isSmall =
    typeof small === 'undefined'
      ? theme === 'ios'
        ? smallIos
        : smallMaterial
      : small;
  const isLarge =
    typeof large === 'undefined'
      ? theme === 'ios'
        ? largeIos
        : largeMaterial
      : large;
  const isRaised =
    typeof raised === 'undefined'
      ? theme === 'ios'
        ? raisedIos
        : raisedMaterial
      : raised;
  const isOutline =
    typeof outline === 'undefined'
      ? theme === 'ios'
        ? outlineIos
        : outlineMaterial
      : outline;

  const dark = useDarkClasses();

  const colors = StepperColors(colorsProp, dark);

  const size = isLarge ? 'large' : isSmall ? 'small' : 'medium';
  const style =
    isOutline && isRaised ? 'clear' : isOutline ? 'outline' : 'fill';
  const shape = isRounded ? 'rounded' : 'square';

  const c = themeClasses(
    StepperClasses(
      {
        ...props,
        rounded: isRounded,
        small: isSmall,
        large: isLarge,
        raised: isRaised,
        outline: isOutline,
      },
      colors
    )
  );

  const attrs = {
    ...rest,
  };

  const classes = cls(
    c.base,
    isRaised && c.raised,
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
    <Component ref={elRef} className={classes} {...attrs}>
      <span
        ref={buttonLeftElRef}
        className={buttonLeftClasses}
        role="button"
        tabIndex="0"
        onClick={onMinus}
      >
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
          readOnly={inputReadOnly}
          onInput={onInput}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      )}
      {!input && !buttonsOnly && <span className={valueClasses}>{value}</span>}

      <span
        ref={buttonRightElRef}
        className={buttonRightClasses}
        role="button"
        tabIndex="0"
        onClick={onPlus}
      >
        <span className={c.hBar} />
        <span className={c.vBar} />
      </span>
    </Component>
  );
});

Stepper.displayName = 'Stepper';

export default Stepper;
