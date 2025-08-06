<script>
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';

  import PreloaderIOS from './icons/PreloaderIOS.svelte';
  import PreloaderMaterial from './icons/PreloaderMaterial.svelte';
  import { PreloaderClasses } from '../../shared/classes/PreloaderClasses.js';
  import { PreloaderColors } from '../../shared/colors/PreloaderColors.js';

  let {
    class: className,
    colors: colorsProp,
    ios = undefined,
    material = undefined,

    children,
    ...restProps
  } = $props();

  const theme = $derived(useTheme({ ios, material }));

  const dark = useDarkClasses();
  const colors = $derived(PreloaderColors(colorsProp, dark));

  const c = $derived(
    useThemeClasses(
      { ios, material },
      PreloaderClasses({}, colors, theme),
      className
    )
  );
</script>

<span class={c.base} {...restProps}>
  <span class={c.inner}>
    {#if theme === 'ios'}
      <PreloaderIOS class="w-full h-full" />
    {:else}
      <PreloaderMaterial class="w-full h-full" />
    {/if}
  </span>
  {@render children?.()}
</span>
