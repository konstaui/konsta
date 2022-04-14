<script>
import { cls } from '../../shared/cls.js';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';
import { StepperClasses } from '../../shared/classes/StepperClasses.js';

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
    small,
    large,
    raised,
    outline,

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

  const theme = useTheme({ ios, material });

  useTouchRipple(buttonLeftElRef, theme === 'material' && touchRipple);
  useTouchRipple(buttonRightElRef, theme === 'material' && touchRipple);

  $: colors = {
    text: 'text-primary',
    border: 'border-primary',
    bg: 'bg-primary',
    activeBg: 'active:bg-primary',
    activeBgDark: 'active:bg-primary-dark',
    touchRipple: 'touch-ripple-primary',
    ...colorsProp,
  };

  const size = large ? 'large' : small ? 'small' : 'medium';
  const style = outline && raised ? 'clear' : outline ? 'outline' : 'fill';
  const shape = rounded ? 'rounded' : 'square';

  $: c = useThemeClasses(StepperClasses(props, colors));

  $: classes = cls(
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
    <Component class={classes} {...$$restProps}>
      <span ref={buttonLeftElRef} class={buttonLeftClasses} onClick={onMinus}>
        <span class={c.hBar} />
      </span>
      {input && !buttonsOnly && (
        <input
          class={valueClasses}
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
      {!input && !buttonsOnly && <span class={valueClasses}>{value}</span>}

      <span ref={buttonRightElRef} class={buttonRightClasses} onClick={onPlus}>
        <span class={c.hBar} />
        <span class={c.vBar} />
      </span>
    </Component>
  );
});

Stepper.displayName = 'Stepper';

export default Stepper;

</script>