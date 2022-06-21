<template>
  <div v-if="backdrop" :class="c.backdrop[state]" @click="onBackdropClick" />
  <component :is="component" :class="c.base[state]">
    <slot />
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { ActionsClasses } from '../../shared/esm/classes/ActionsClasses.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  export default {
    name: 'k-actions',
    props: {
      component: {
        type: String,
        default: 'div',
      },
      ios: {
        type: Boolean,
        default: undefined,
      },
      material: {
        type: Boolean,
        default: undefined,
      },
      opened: Boolean,
      backdrop: { type: Boolean, default: true },
    },
    emits: ['backdropclick'],
    setup(props, ctx) {
      const state = computed(() => (props.opened ? 'opened' : 'closed'));

      const c = useThemeClasses(props, () =>
        ActionsClasses(props, ctx.attrs.class)
      );

      const onBackdropClick = (e) => {
        ctx.emit('backdropclick', e);
      };

      return {
        onBackdropClick,
        c,
        state,
      };
    },
  };
</script>
