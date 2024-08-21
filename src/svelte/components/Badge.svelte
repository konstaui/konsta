<script>
  import { BadgeClasses } from '../../shared/classes/BadgeClasses.js';
  import { BadgeColors } from '../../shared/colors/BadgeColors.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let small = false;

  export let onClick = undefined;

  $: colors = BadgeColors(colorsProp);

  $: size = small ? 'sm' : 'md';

  $: c = useThemeClasses(
    { ios, material },
    BadgeClasses({ small }, colors),
    className,
    (v) => (c = v)
  );
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<span class={c.base[size]} {...$$restProps} on:click={onClick}>
  <slot />
</span>
