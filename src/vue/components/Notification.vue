<template>
  <component :is="component" ref="elRef" :class="c.base">
    <div :class="c.header">
      <div v-if="icon || slots.icon" :class="c.icon">
        {{ icon }}<slot name="icon" />
      </div>
      <div v-if="title || slots.title" :class="c.title">
        {{ title }}<slot name="title" />
      </div>
      <div
        v-if="titleRightText || slots.titleRightText"
        :class="c.titleRightText"
      >
        {{ titleRightText }}<slot name="titleRightText" />
      </div>
      <div v-if="button || slots.button" :class="c.button">
        {{ button }}<slot name="button" />
      </div>
    </div>
    <div :class="c.content">
      <div v-if="subtitle || slots.subtitle" :class="c.subtitle">
        {{ subtitle }}<slot name="subtitle" />
      </div>
      <div v-if="text || slots.text" :class="c.text">
        {{ text }}<slot name="text" />
      </div>
      <slot />
    </div>
  </component>
</template>
<script>
  import { ref, computed } from 'vue';
  import { NotificationsClasses } from '../../shared/classes/NotificationsClasses.js';
  import { NotificationsColors } from '../../shared/colors/NotificationsColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';

  export default {
    name: 'k-notification',
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
      opened: {
        type: Boolean,
        default: undefined,
      },
      button: { type: String },
      icon: { type: String },
      title: { type: [String, Number] },
      titleRightText: { type: [String, Number] },
      subtitle: { type: [String, Number] },
      text: { type: [String, Number] },
    },
    setup(props, ctx) {
      const elRef = ref(null);
      useTouchRipple(elRef, props);

      const colors = computed(() =>
        NotificationsColors(props.colors || {}, useDarkClasses)
      );

      const c = useThemeClasses(props, () =>
        NotificationsClasses(
          props,
          colors.value,
          ctx.attrs.class,
          useDarkClasses
        )
      );
      return {
        elRef,
        c,
        slots: ctx.slots,
      };
    },
  };
</script>
