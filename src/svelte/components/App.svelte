<script>
  import { AppClasses } from '../../shared/classes/AppClasses.js';
  import KonstaProvider from '../shared/KonstaProvider.svelte';
  import { KonstaStore } from '../shared/KonstaStore.svelte.js';

  let {
    class: className,
    theme = 'material',
    dark = true,
    materialTouchRipple = true,
    iosHoverHighlight = true,
    safeAreas = true,
    children,
    ...restProps
  } = $props();

  let el = $state(null);
  export { el };

  let currentTheme = $derived.by(() => {
    if (theme === 'ios' || theme === 'material') {
      return theme;
    } else if (
      theme === 'parent' &&
      typeof window !== 'undefined' &&
      typeof document !== 'undefined'
    ) {
      const htmlEl = document.documentElement;
      if (htmlEl) {
        if (htmlEl.classList.contains('ios')) {
          return 'ios';
        } else if (
          htmlEl.classList.contains('md') ||
          htmlEl.classList.contains('material')
        ) {
          return 'material';
        }
      }
    }
  });
  // svelte-ignore state_referenced_locally
  KonstaStore.theme = currentTheme;
  KonstaStore.dark = dark;
  KonstaStore.materialTouchRipple = materialTouchRipple;
  KonstaStore.iosHoverHighlight = iosHoverHighlight;
  $effect(() => {
    KonstaStore.theme = currentTheme;
    KonstaStore.dark = dark;
    KonstaStore.materialTouchRipple = materialTouchRipple;
    KonstaStore.iosHoverHighlight = iosHoverHighlight;
  });

  const classes = $derived(
    AppClasses(
      { theme, dark, materialTouchRipple, iosHoverHighlight, safeAreas },
      currentTheme,
      className
    )
  );
</script>

<KonstaProvider
  theme={currentTheme}
  {dark}
  {materialTouchRipple}
  {iosHoverHighlight}
  autoThemeDetection={false}
>
  <div bind:this={el} class={classes} {...restProps}>
    {@render children?.()}
  </div>
</KonstaProvider>
