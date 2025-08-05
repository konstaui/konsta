import { computed } from 'vue';
import { useContext } from './use-context.js';

const useTheme = (props = {}, context) =>
  computed(() => {
    let theme;
    if (context) {
      theme = context.value.theme || 'ios';
    } else {
      context = useContext();
      if (context && context.value) {
        theme = context.value.theme || 'ios';
      } else {
        theme = 'ios';
      }
    }
    if (props.ios) theme = 'ios';
    if (props.material) theme = 'material';
    return theme;
  });

export { useTheme };
