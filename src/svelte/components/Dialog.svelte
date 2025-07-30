<script>
  import { DialogClasses } from '../../shared/classes/DialogClasses.js';
  import { DialogColors } from '../../shared/colors/DialogColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let sizeIos = 'w-[16.875rem]';
  export let sizeMaterial = 'w-[19.5rem]';
  export let titleFontSizeIos = 'text-[18px]';
  export let titleFontSizeMaterial = 'text-[24px]';

  export let opened = false;
  export let backdrop = true;
  export let onBackdropClick = undefined;

  $: state = opened ? 'opened' : 'closed';

  const dark = useDarkClasses();

  $: colors = DialogColors(colorsProp, dark);

  $: c = useThemeClasses(
    { ios, material },
    DialogClasses(
      {
        sizeIos,
        sizeMaterial,
        titleFontSizeIos,
        titleFontSizeMaterial,
      },
      colors,
      dark
    ),
    className,
    (v) => (c = v)
  );
</script>

{#if backdrop}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class={c.backdrop[state]} on:click={onBackdropClick}></div>
{/if}

<div class={c.base[state]} {...$$restProps}>
  <div class={c.contentWrap}>
    {#if $$slots.title}
      <div class={c.title}><slot name="title" /></div>
    {/if}
    {#if $$slots.default}
      <div class={c.content}>
        <slot />
      </div>
    {/if}
  </div>
  {#if $$slots.buttons}
    <div class={c.buttons}><slot name="buttons" /></div>
  {/if}
</div>
