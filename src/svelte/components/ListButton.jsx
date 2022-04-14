<script>
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';
import { ListButtonClasses } from '../../shared/classes/ListButtonClasses.js';

const ListButton = forwardRef((props, ref) => {
  const {
    component = 'li',
    className,
    colors: colorsProp,

    hairlines = true,

    // Link props
    href,
    target,

    // Button props
    type,
    value,

    linkComponent = 'a',
    linkProps = {},

    ios,
    material,

    touchRipple = true,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const elRef = useRef(null);
  const rippleElRef = useRef(null);

  const theme = useTheme({ ios, material });

  useTouchRipple(rippleElRef, theme === 'material' && touchRipple);

  $: colors = {
    text: 'text-primary',
    activeBg: 'active:bg-primary',
    touchRipple: 'touch-ripple-primary',
    ...colorsProp,
  };

  $: c = useThemeClasses(
    ListButtonClasses({ ...props, hairlines }, colors, className),
    className
  );

  const isLink = !!href || href === '';
  const hrefComputed =
    !isLink || href === true || href === false ? undefined : href || '';
  const buttonAttrs = { href: hrefComputed, target, type, value, ...linkProps };

  const ButtonComponent = isLink ? linkComponent : 'button';

  return (
    <Component class={c.base} {...$$restProps}>
      <ButtonComponent ref={rippleElRef} class={c.button} {...buttonAttrs}>
        <slot />
      </ButtonComponent>
    </Component>
  );
});

ListButton.displayName = 'ListButton';

export default ListButton;

</script>