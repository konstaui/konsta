<template>
  <div v-if="backdrop" :class="c.backdrop[state]" @click="onBackdropClick" />
  <k-glass :highlight="false" :component="component" :class="c.base[state]">
    <div :class="c.contentWrap">
      <div v-if="slots.title" :class="c.title"><slot name="title" /></div>
      <div v-if="slots.default" :class="c.content">
        <slot />
      </div>
    </div>
    <div v-if="slots.buttons" :class="c.buttons"><slot name="buttons" /></div>
  </k-glass>
</template>
<script>
  import { computed } from 'vue';
  import { useContext } from '../shared/use-context.js';
  import { DialogClasses } from '../../shared/classes/DialogClasses.js';
  import { DialogColors } from '../../shared/colors/DialogColors.js';
  import { darkClasses } from '../shared/use-dark-classes.js';
  import { themeClasses } from '../shared/use-theme-classes.js';
  import kGlass from './Glass.vue';

  export default {
    name: 'k-dialog',
    components: {
      kGlass,
    },
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
      titleFontSizeIos: { type: String, default: 'text-[17px]' },
      titleFontSizeMaterial: { type: String, default: 'text-[24px]' },
      opened: Boolean,
      backdrop: { type: Boolean, default: true },
    },
    emits: ['backdropclick'],
    setup(props, ctx) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const state = computed(() => (props.opened ? 'opened' : 'closed'));
      const colors = computed(() =>
        DialogColors(props.colors || {}, useDarkClasses)
      );
      const c = useThemeClasses(props, () =>
        DialogClasses(props, colors.value, ctx.attrs.class)
      );

      const onBackdropClick = (e) => {
        ctx.emit('backdropclick', e);
      };

      return {
        onBackdropClick,
        c,
        state,
        slots: ctx.slots,
      };
    },
  };
</script>
