import { computed } from 'vue';

const useTheme = (props = {}, context) =>
  computed(() => {
    let theme;
    if (context) {
      theme = context.value.theme || 'ios';
    }
    if (props.ios) theme = 'ios';
    if (props.material) theme = 'material';
    return theme;
  });

export { useTheme };
