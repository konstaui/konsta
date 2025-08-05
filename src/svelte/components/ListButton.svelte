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
    touchRipple = true,
    linkComponent = 'a',

    onClick = undefined,
    onclick = undefined,

    children,
    ...restProps
  } = $props();

  const ListDividersContext =
    getContext('ListDividersContext') || (() => ({ value: false }));

  let rippleEl = $state(null);

  const theme = $derived(useTheme({ ios, material }));

  useTouchRipple(
    () => rippleEl,
    () => touchRipple
  );

  const dark = useDarkClasses();

  const colors = $derived(ListButtonColors(colorsProp, dark));

  const c = $derived(
    useThemeClasses(
      { ios, material },
      ListButtonClasses(
        { dividers: ListDividersContext().value },
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
      bind:this={rippleEl}
      class={c.button}
      onclick={onClick || onclick}
      {...buttonAttrs}
    >
      {@render children?.()}
    </svelte:element>
  {:else}
    <ButtonComponent
      bind:this={rippleEl}
      class={c.button}
      {...buttonAttrs}
      onclick={onClick || onclick}
    >
      {@render children?.()}
    </ButtonComponent>
  {/if}
</li>
