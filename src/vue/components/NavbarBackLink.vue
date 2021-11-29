<template>
  <k-link :component="component" :class="c.base" navbar>
    <span :class="c.icon">
      <k-back-icon :theme="theme" />
    </span>
    <span v-if="shouldShowText">{{ text }}</span>
    <slot />
  </k-link>
</template>
<script>
  import { computed } from 'vue';
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import kBackIcon from './icons/BackIcon.vue';
  import kLink from './Link.vue';

  export default {
    name: 'k-navbar-back-link',
    components: {
      kLink,
      kBackIcon,
    },
    props: {
      component: {
        type: String,
        default: 'a',
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
      text: {
        type: String,
        default: 'Back',
      },
      showText: {
        type: [Boolean, String],
        default: 'auto',
      },
    },
    setup(props) {
      const theme = useTheme(props);
      const shouldShowText = computed(
        () =>
          (props.showText === 'auto' && theme.value === 'ios') ||
          props.showText === true
      );
      const c = useThemeClasses(props, () => ({
        base: {
          common: 'cursor-pointer',
          material: 'min-w-12 touch-ripple-inset',
        },
        icon: '',
      }));
      return {
        c,
        shouldShowText,
        theme,
      };
    },
  };
</script>
