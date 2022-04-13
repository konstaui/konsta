<script>
  import { afterUpdate } from 'svelte';
  import { KonstaStore } from './KonstaStore.js';
  import { useThemeStore } from './use-theme-store.js';

  export let theme;
  export let dark = false;
  export let touchRipple = true;
  export let autoThemeDetection = true;

  let currentTheme = theme;

  const updateStore = () => {
    useThemeStore.set(currentTheme);
    KonstaStore.set({
      theme: currentTheme,
      dark,
      touchRipple,
    });
  };

  const calcTheme = () => {
    if (!autoThemeDetection) return;
    if (theme === 'ios' || theme === 'material') {
      if (currentTheme !== theme) {
        currentTheme = theme;
        updateStore();
      }
    } else if (
      currentTheme === 'parent' &&
      typeof window !== 'undefined' &&
      typeof document !== 'undefined'
    ) {
      const htmlEl = document.documentElement;
      if (htmlEl) {
        if (htmlEl.classList.contains('ios')) {
          currentTheme = 'ios';
          updateStore();
        } else if (
          htmlEl.classList.contains('md') ||
          htmlEl.classList.contains('material')
        ) {
          currentTheme = 'material';
          updateStore();
        }
      }
    }
  };

  afterUpdate(() => {
    calcTheme();
  });

  calcTheme();

  updateStore();
</script>

<slot />
