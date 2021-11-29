<template>
  <component :is="component" :class="c.base[style]">
    <div v-if="header || slots.header" :class="c.header">
      {{ header }}<slot name="header" />
    </div>

    <div :class="c.content">
      <slot />
    </div>

    <div v-if="footer || slots.footer" :class="c.footer">
      {{ footer }}<slot name="footer" />
    </div>
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { cls } from '../shared/cls.js';

  export default {
    name: 'k-card',
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
      margin: { type: String, default: 'm-4' },
      header: { type: [String, Number] },
      footer: { type: [String, Number] },
      // Style
      outline: { type: Boolean, default: false },
    },
    setup(props, ctx) {
      const colors = computed(() => ({
        bg: cls(
          `bg-block-strong-light`,
          useDarkClasses('dark:bg-block-strong-dark')
        ),
        footerText: cls(`text-black`, useDarkClasses('dark:text-white')),
        ...(props.colors || {}),
      }));

      const style = computed(() => (props.outline ? 'outline' : 'shadow'));

      const c = useThemeClasses(props, () => ({
        base: {
          common: cls(props.margin, colors.value.bg, `rounded overflow-hidden`),
          shadow: 'shadow',
          outline: cls(
            `border border-black border-opacity-10`,
            useDarkClasses('dark:border-white dark:border-opacity-10')
          ),
        },
        header: cls(
          `border-b border-black border-opacity-10 px-4 py-2`,
          useDarkClasses('dark:border-white dark:border-opacity-10')
        ),
        content: 'p-4 text-sm',
        footer: cls(
          `border-t border-black border-opacity-10 text-sm text-opacity-55`,
          colors.value.footerText,
          useDarkClasses(
            'dark:border-white  dark:border-opacity-10 dark:text-opacity-55 px-4 py-2'
          )
        ),
      }));
      return {
        c,
        style,
        slots: ctx.slots,
      };
    },
  };
</script>
