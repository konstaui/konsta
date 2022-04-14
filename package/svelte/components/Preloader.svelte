<script>
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  import PreloaderIOS from './icons/PreloaderIOS.svelte';
  import PreloaderMaterial from './icons/PreloaderMaterial.svelte';
  import { PreloaderClasses } from '../../shared/esm/classes/PreloaderClasses.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let size = 'w-8 h-8';

  let theme;

  theme = useTheme({ ios, material }, (v) => (theme = v));

  $: colors = {
    icon: 'text-primary',
    ...colorsProp,
  };

  $: c = useThemeClasses(
    { ios, material },
    PreloaderClasses({ size }, colors, theme),
    className,
    (v) => (c = v)
  );
</script>

<span class={c.base} {...$$restProps}>
  <span class={c.inner}>
    {#if theme === 'ios'}
      <PreloaderIOS class="w-full h-full" />
    {:else}
      <PreloaderMaterial class="w-full h-full" />
    {/if}
  </span>
  <slot />
</span>
