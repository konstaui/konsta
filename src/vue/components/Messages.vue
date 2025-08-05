<template>
  <component :is="component" :id="id" ref="elRef" :class="c.base">
    <slot />
  </component>
</template>
<script>
  import { ref } from 'vue';
  import { useContext } from '../shared/use-context.js';
  import { MessagesClasses } from '../../shared/classes/MessagesClasses.js';
  import { themeClasses } from '../shared/use-theme-classes.js';

  export default {
    name: 'k-messages',
    props: {
      component: {
        type: String,
        default: 'div',
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
      id: String,
    },
    setup(props, ctx) {
      const context = useContext();
      const useThemeClasses = themeClasses(context);
      const elRef = ref(null);

      const c = useThemeClasses(props, () =>
        MessagesClasses(
          {
            ...props,
          },
          ctx.attrs.class
        )
      );

      return {
        c,
        elRef,
      };
    },
  };
</script>
