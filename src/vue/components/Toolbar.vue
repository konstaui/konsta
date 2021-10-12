<template>
  <component :is="component" :class="c.base">
    <div :class="c.bg" />
    <div :class="c.inner[tabbar && tabbarLabels ? 'tabbarLabels' : 'toolbar']">
      <slot />
    </div>
  </component>
</template>
<script>
  import { ref, computed } from 'vue';
  import { cls } from '../shared/cls.js';
  import { positionClass } from '../shared/position-class.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';

  export default {
    name: 'twm-toolbar',
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
      translucent: { type: Boolean, default: true },

      bgClass: { type: String, default: '' },
      innerClass: { type: String, default: '' },

      hairlines: { type: Boolean, default: true },

      tabbar: { type: Boolean, default: false },
      tabbarLabels: { type: Boolean, default: false },

      top: { type: Boolean, default: false },
    },
    setup(props, ctx) {
      const colors = computed(() => ({
        bgIos: cls(
          'bg-bars-ios-light',
          useDarkClasses('dark:bg-bars-ios-dark')
        ),
        bgMaterial: cls(
          'bg-bars-material-light',
          useDarkClasses('dark:bg-bars-material-dark')
        ),
        ...(props.colors || {}),
      }));

      const c = useThemeClasses(props, () => ({
        base: {
          common: cls(
            `w-full z-20`,
            positionClass('relative', ctx.attrs.class),
            !props.top && 'pb-safe'
          ),
        },
        bg: {
          common: cls('absolute w-full h-full left-0 top-0', props.bgClass),
          ios: cls(
            props.hairlines && (props.top ? 'hairline-b' : 'hairline-t'),
            colors.value.bgIos,
            props.translucent && 'translucent'
          ),
          material: cls(
            `shadow-md ${colors.value.bgMaterial}`,
            !props.top && 'transform rotate-180'
          ),
        },
        inner: {
          common: cls(
            `flex relative justify-between items-center w-full overflow-hidden`,
            props.innerClass
          ),
          ios: 'pl-2-safe pr-2-safe',
          material: !props.tabbar ? 'pl-2-safe pr-2-safe' : '',
          toolbar: {
            ios: 'h-11',
            material: 'h-12',
          },
          tabbarLabels: {
            ios: 'h-12.5',
            material: 'h-14',
          },
        },
      }));
      return {
        c,
      };
    },
  };
</script>
