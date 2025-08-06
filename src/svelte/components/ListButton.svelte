<script>
  import { getContext } from 'svelte';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.svelte.js';
  import { ListButtonClasses } from '../../shared/classes/ListButtonClasses.js';
  import { ListButtonColors } from '../../shared/colors/ListButtonColors.js';
  import { useTheme } from '../shared/use-theme.js';

  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,
    // Link props
    href = undefined,
    target = undefined,
    // Button props
    type = undefined,
    value = undefined,
    linkProps = {},
    linkComponent = 'a',

    onClick = undefined,
    onclick = undefined,

    children,
    ...restProps
  } = $props();

  const ListContext =
    getContext('ListContext') || (() => ({ value: { dividers: false } }));

  let el = $state(null);
  export { el };

  const theme = $derived(useTheme({ ios, material }));

  useTouchRipple(
    () => el,
    () => true
  );

  const dark = useDarkClasses();

  const colors = $derived(ListButtonColors(colorsProp, dark));

  const c = $derived(
    useThemeClasses(
      { ios, material },
      ListButtonClasses(
        { dividers: ListContext().value.dividers },
        colors,
        theme
      ),
      className
    )
  );

  const isLink = $derived(!!href || href === '');
  const hrefComputed = $derived(
    !isLink || href === true || href === false ? undefined : href || ''
  );
  const buttonAttrs = $derived({
    href: hrefComputed,
    target,
    type,
    value,
    ...linkProps,
  });

  const ButtonComponent = $derived(isLink ? linkComponent : 'button');
</script>

<li class={c.base} {...restProps}>
  {#if typeof ButtonComponent === 'string'}
    <!-- svelte-ignore a11y_missing_attribute -->
    <svelte:element
      this={ButtonComponent}
      bind:this={el}
      class={c.button}
      onclick={onClick || onclick}
      {...buttonAttrs}
    >
      {@render children?.()}
    </svelte:element>
  {:else}
    <ButtonComponent
      bind:this={el}
      class={c.button}
      {...buttonAttrs}
      onclick={onClick || onclick}
    >
      {@render children?.()}
    </ButtonComponent>
  {/if}
</li>
