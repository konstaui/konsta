<template>
  <component :is="component" :class="c.base[size]">
    <slot />
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { useContext } from '../shared/use-context.js';
  import { BadgeClasses } from '../../shared/classes/BadgeClasses.js';
  import { BadgeColors } from '../../shared/colors/BadgeColors.js';
  import { themeClasses } from '../shared/use-theme-classes.js';

  export default {
    name: 'k-badge',
    props: {
      component: {
        type: String,
        default: 'span',
      },
      small: {
        type: Boolean,
        default: false,
      },
      colors: {
        type: Object,
      },
      ios: {
        type: Boolean,
        default: undefined,
      },
      material: {
        type: Boolean,
        default: undefined,
      },
    },
    setup(props) {
      const context = useContext();
      const useThemeClasses = themeClasses(context);
      const colors = computed(() => BadgeColors(props.colors || {}));

      const size = computed(() => (props.small ? 'sm' : 'md'));

      const c = useThemeClasses(props, () => BadgeClasses(props, colors.value));

      return {
        c,
        size,
      };
    },
  };
</script>
