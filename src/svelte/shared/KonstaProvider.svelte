<script>
  import { KonstaStore } from './KonstaStore.svelte.js';

  let {
    theme,
    dark = false,
    touchRipple = true,
    autoThemeDetection = true,
    children,
  } = $props();

  let currentTheme = $derived.by(() => {
    if (!autoThemeDetection) return theme;
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
</script>

{@render children?.()}
