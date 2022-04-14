<script>
  import { BadgeClasses } from '../../shared/classes/BadgeClasses.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let small = false;

  export let onClick = undefined;

  $: colors = {
    bg: 'bg-primary',
    text: 'text-white',
    ...colorsProp,
  };

  $: size = small ? 'sm' : 'md';

  $: c = useThemeClasses(
    { ios, material },
    BadgeClasses({ small }, colors),
    className,
    (v) => (c = v)
  );
</script>

<span class={c.base[size]} {...$$restProps} on:click={onClick}>
  <slot />
</span>
