<script>
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTheme } from '../shared/use-theme.js';

  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { DialogButtonClasses } from '../../shared/classes/DialogButtonClasses.js';
  import { DialogButtonColors } from '../../shared/colors/DialogButtonColors.js';
  import Button from './Button.svelte';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let component = 'button'; // or 'a'

  export let disabled = false;
  export let strong = undefined;
  export let strongIos = undefined;
  export let strongMaterial = undefined;

  export let onClick = undefined;

  let theme;
  theme = useTheme({}, (v) => (theme = v));

  $: isStrong =
    typeof strong === 'undefined'
      ? theme === 'ios'
        ? strongIos
        : strongMaterial
      : strong;

  $: attrs = {
    ...$$restProps,
  };

  const dark = useDarkClasses();

  $: colors = DialogButtonColors(colorsProp, dark);

  $: c = useThemeClasses(
    { ios, material },
    DialogButtonClasses(
      { disabled, strong: isStrong },
      colors,
      className,
      dark
    ),
    '',
    (v) => (c = v)
  );
</script>

{#if theme === 'ios'}
  {#if typeof component === 'string'}
    <svelte:element
      this={component}
      class={c.base}
      {disabled}
      {...attrs}
      on:click={onClick}
    >
      <slot />
    </svelte:element>
  {:else}
    <svelte:component
      this={component}
      class={c.base}
      {disabled}
      {...attrs}
      on:click={onClick}
    >
      <slot />
    </svelte:component>
  {/if}
{:else}
  <Button
    {component}
    inline
    rounded
    {disabled}
    clear={!isStrong}
    class={className}
    {onClick}
    {...attrs}
  >
    <slot />
  </Button>
{/if}
