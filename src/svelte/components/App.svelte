<script>
  import { AppClasses } from '../../shared/classes/AppClasses.js';
  import KonstaProvider from '../shared/KonstaProvider.svelte';
  import { KonstaStore } from '../shared/KonstaStore.svelte.js';

  let {
    class: className,
    theme = 'material',
    dark = true,
    touchRipple = true,
    safeAreas = true,
    children,
    ...restProps
  } = $props();

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
  KonstaStore.theme = currentTheme;
  KonstaStore.dark = dark;
  KonstaStore.touchRipple = touchRipple;
  $effect(() => {
    KonstaStore.theme = currentTheme;
    KonstaStore.dark = dark;
    KonstaStore.touchRipple = touchRipple;
  });

  const classes = $derived(
    AppClasses({ theme, dark, touchRipple, safeAreas }, currentTheme, className)
  );
</script>

<KonstaProvider
  theme={currentTheme}
  {dark}
  {touchRipple}
  autoThemeDetection={false}
>
  <div class={classes} {...restProps}>
    {@render children?.()}
  </div>
</KonstaProvider>
