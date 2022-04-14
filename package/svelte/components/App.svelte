<script>
  import { afterUpdate } from 'svelte';
  import { AppClasses } from '../../shared/esm/classes/AppClasses.js';
  import KonstaProvider from '../shared/KonstaProvider.svelte';
  import { KonstaStore } from '../shared/KonstaStore.js';

  let className = undefined;
  export { className as class };

  export let theme = 'material';
  export let dark = true;
  export let touchRipple = true;
  export let safeAreas = true;

  let currentTheme = theme;

  const updateStore = () => {
    KonstaStore.set({
      theme: currentTheme,
      dark,
      touchRipple,
    });
  };

  const calcTheme = () => {
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

  $: classes = AppClasses(
    { theme, dark, touchRipple, safeAreas },
    currentTheme,
    className
  );
</script>

<KonstaProvider
  theme={currentTheme}
  {dark}
  {touchRipple}
  autoThemeDetection={false}
>
  <div class={classes} {...$$restProps}>
    <slot />
  </div>
</KonstaProvider>
