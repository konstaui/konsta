<template>
  <component :is="component" :class="c.base">
    <div :class="c.bg" />
    <div :class="c.inner">
      <div v-if="slots.left" :class="c.left"><slot name="left" /></div>

      <div
        v-if="title || subtitle || slots.title || slots.subtitle"
        :class="c.title"
      >
        {{ title }}<slot name="title" />
        <div v-if="subtitle || slots.subtitle" :class="c.subtitle">
          {{ subtitle }}<slot name="subtitle" />
        </div>
      </div>

      <div v-if="slots.right" :class="c.right"><slot name="right" /></div>
      <slot />
    </div>
    <div v-if="slots.subnavbar" :class="c.subnavbar">
      <slot name="subnavbar" />
    </div>
  </component>
</template>
<script>
  import { computed } from 'vue';

  import { cls } from '../shared/cls.js';
  import { positionClass } from '../shared/position-class.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';

  export default {
    name: 'k-navbar',
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
      bgClass: { type: String, default: '' },
      innerClass: { type: String, default: '' },
      leftClass: { type: String, default: '' },
      titleClass: { type: String, default: '' },
      subtitleClass: { type: String, default: '' },
      rightClass: { type: String, default: '' },
      subnavbarClass: { type: String, default: '' },

      translucent: { type: Boolean, default: true },
      hairlines: { type: Boolean, default: true },

      fontSizeIos: { type: String, default: 'text-navbar-ios' },
      fontSizeMaterial: { type: String, default: 'text-navbar-material' },

      title: String,
      subtitle: String,
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
        title: cls('text-black', useDarkClasses('dark:text-white')),
        ...(props.colors || {}),
      }));

      const c = useThemeClasses(props, () => ({
        base: {
          common: cls(
            `w-full z-20 top-0 pt-safe`,
            positionClass('sticky', ctx.attrs.class)
          ),
          ios: props.fontSizeIos,
          material: props.fontSizeMaterial,
        },
        bg: {
          common: cls('absolute w-full h-full left-0 top-0', props.bgClass),
          ios: cls(
            colors.value.bgIos,
            props.hairlines && 'hairline-b',
            props.translucent && 'translucent'
          ),
          material: `shadow-md ${colors.value.bgMaterial}`,
        },
        subnavbar: {
          common: cls('relative flex items-center', props.subnavbarClass),
          ios: 'h-11 pl-2-safe pr-2-safe',
          material: 'h-12 pl-4-safe pr-4-safe',
        },
        inner: {
          common: cls(
            'flex relative items-center w-full overflow-hidden',
            props.innerClass
          ),
          ios: cls(
            'pl-2-safe pr-2-safe h-11',
            !ctx.slots.left && ctx.slots.right
              ? 'justify-end'
              : 'justify-between'
          ),
          material: 'justify-start h-14 lg:h-16 pl-safe pr-safe',
        },
        left: {
          common: cls(
            'flex justify-center items-center h-full',
            props.leftClass
          ),
          ios: 'mr-2 transform transform-gpu',
          material: 'mx-1',
        },
        title: {
          common: cls(
            `${colors.value.title} whitespace-nowrap leading-tight`,
            props.titleClass
          ),
          ios: 'font-semibold absolute top-1/2 left-1/2 transform-gpu -translate-x-1/2 -translate-y-1/2 text-center',
          material: 'font-medium mx-4 text-left',
        },
        subtitle: {
          common: cls('font-normal leading-none', props.subtitleClass),
          ios: 'text-2xs opacity-55',
          material: 'text-sm opacity-85',
        },
        right: {
          common: cls(
            'flex justify-center items-center h-full',
            props.rightClass
          ),
          ios: 'ml-2 transform transform-gpu',
          material: 'ml-auto mr-1',
        },
      }));
      return {
        c,
        slots: ctx.slots,
      };
    },
  };
</script>
