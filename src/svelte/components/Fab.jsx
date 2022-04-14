<script>
import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';
import { FabClasses } from '../../shared/classes/FabClasses.js';

const Fab = forwardRef((props, ref) => {
  const {
    component = 'a',
    className,
    colors: colorsProp,

    href,
    text,
    textPosition = 'after',
    icon,

    ios,
    material,

    touchRipple = true,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const rippleElRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: rippleElRef.current,
  }));

  const theme = useTheme({ ios, material });

  useTouchRipple(rippleElRef, theme === 'material' && touchRipple);

  $: colors = {
    bg: 'bg-primary',
    activeBg: 'active:bg-primary-dark',
    text: 'text-white',
    ...colorsProp,
  };

  $: c = useThemeClasses(FabClasses(props, colors), className);

  return (
    <Component
      class={text ? c.base.withText : c.base.iconOnly}
      href={href}
      ref={rippleElRef}
      {...$$restProps}
    >
      {text && textPosition === 'before' && <span class={c.text}>{text}</span>}
      {icon && <span class={c.icon}>{icon}</span>}
      {text && textPosition === 'after' && <span class={c.text}>{text}</span>}
      <slot />
    </Component>
  );
});

Fab.displayName = 'Fab';

export default Fab;

</script>