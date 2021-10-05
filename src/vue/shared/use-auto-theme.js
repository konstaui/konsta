import { ref, watch, onMounted } from 'vue';

export const useAutoTheme = (props, autoThemeDetection = true) => {
  const themeState = ref(props.theme);

  /* eslint-disable no-restricted-globals */
  const setTheme = (newTheme) => {
    if (newTheme === 'ios' || newTheme === 'material') {
      if (themeState.value !== newTheme) {
        themeState.value = newTheme;
      }
    } else if (
      autoThemeDetection &&
      themeState.value === 'parent' &&
      typeof window !== 'undefined' &&
      typeof document !== 'undefined'
    ) {
      const htmlEl = document.documentElement;
      if (htmlEl) {
        if (htmlEl.classList.contains('ios')) {
          themeState.value = 'ios';
        } else if (
          htmlEl.classList.contains('md') ||
          htmlEl.classList.contains('material')
        ) {
          themeState.value = 'material';
        }
      }
    }
  };
  /* eslint-enable no-restricted-globals */

  watch(
    () => props.theme,
    (newTheme) => {
      setTheme(newTheme);
    }
  );
  onMounted(() => {
    setTheme(props.theme);
  });

  return themeState;
};
