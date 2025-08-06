<script>
  import { useTheme } from '../shared/use-theme.js';

  import Button from './Button.svelte';

  let {
    class: className,
    ios = undefined,
    material = undefined,

    component = 'button', // or 'a'
    disabled = false,
    strong = undefined,
    strongIos = undefined,
    strongMaterial = undefined,

    onClick = undefined,
    onclick = undefined,

    children,
    ...restProps
  } = $props();

  let el = $state(null);
  export { el };

  const theme = $derived(useTheme({ ios, material }));

  const isStrong = $derived(
    typeof strong === 'undefined'
      ? theme === 'ios'
        ? strongIos
        : strongMaterial
      : strong
  );

  const attrs = $derived({
    ...restProps,
  });
</script>

{#if theme === 'ios'}
  <Button
    bind:this={el}
    large
    rounded
    tonal={!isStrong}
    class={className}
    {disabled}
    {...attrs}
    onclick={onClick || onclick}
  >
    {@render children?.()}
  </Button>
{:else}
  <Button
    bind:this={el}
    {component}
    inline
    rounded
    {disabled}
    clear={!isStrong}
    class={className}
    {...attrs}
    onclick={onClick || onclick}
  >
    {@render children?.()}
  </Button>
{/if}
