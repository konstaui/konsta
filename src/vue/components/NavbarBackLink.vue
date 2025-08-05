<template>
  <k-link :component="component" :class="c.base" navbar>
    <span :class="c.icon">
      <k-back-icon :theme="theme" />
    </span>
    <span v-if="showText">{{ text }}</span>
    <slot />
  </k-link>
</template>
<script>
  import { useContext } from '../shared/use-context.js';

  import { useTheme } from '../shared/use-theme.js';

  import { themeClasses } from '../shared/use-theme-classes.js';
  import kBackIcon from './icons/BackIcon.vue';
  import kLink from './Link.vue';

  import { NavbarBackLinkClasses } from '../../shared/classes/NavbarBackLinkClasses.js';

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
        type: Boolean,
        default: false,
      },
    },
    setup(props) {
      const context = useContext();
      const useThemeClasses = themeClasses(context);
      const theme = useTheme(props, context);
      const c = useThemeClasses(props, () => NavbarBackLinkClasses());
      return {
        c,
        theme,
      };
    },
  };
</script>
