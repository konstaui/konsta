<template>
  <component :is="component" ref="elRef" :class="c.base">
    <div v-if="theme === 'ios'" :class="c.bgBlur" />
    <div ref="bgElRef" :class="c.bg" />
    <div ref="innerElRef" :class="c.inner">
      <k-glass v-if="slots.left" :class="c.left"><slot name="left" /></k-glass>

      <div
        v-if="title || subtitle || slots.title || slots.subtitle"
        ref="titleElRef"
        :class="c.title"
      >
        {{ title }}<slot name="title" />
        <div v-if="subtitle || slots.subtitle" :class="c.subtitle">
          {{ subtitle }}<slot name="subtitle" />
        </div>
      </div>

      <k-glass v-if="slots.right" :class="c.right"
        ><slot name="right"
      /></k-glass>
      <slot />
    </div>
    <div
      v-if="large || medium"
      ref="titleContainerElRef"
      :class="c.titleContainer"
    >
      {{ title }}
      <slot name="title" />
    </div>
    <div v-if="slots.subnavbar" ref="subnavbarElRef" :class="c.subnavbar">
      <slot name="subnavbar" />
    </div>
  </component>
</template>
<script>
  import {
    computed,
    onMounted,
    onBeforeUnmount,
    onUpdated,
    ref,
    provide,
  } from 'vue';
  import { useContext } from '../shared/use-context.js';
  import { useTheme } from '../shared/use-theme.js';
  import { themeClasses } from '../shared/use-theme-classes.js';
  import { darkClasses } from '../shared/use-dark-classes.js';
  import { NavbarClasses } from '../../shared/classes/NavbarClasses.js';
  import { NavbarColors } from '../../shared/colors/NavbarColors.js';
  import kGlass from './Glass.vue';

  export default {
    name: 'k-navbar',
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
      bgClass: { type: String, default: '' },
      innerClass: { type: String, default: '' },
      leftClass: { type: String, default: '' },
      titleClass: { type: String, default: '' },
      subtitleClass: { type: String, default: '' },
      rightClass: { type: String, default: '' },
      subnavbarClass: { type: String, default: '' },

      centerTitle: { type: Boolean, default: undefined },

      outline: { type: Boolean, default: undefined },
      medium: { type: Boolean, default: false },
      large: { type: Boolean, default: false },
      transparent: { type: Boolean, default: false },

      fontSizeIos: { type: String, default: 'text-[17px]' },
      fontSizeMaterial: { type: String, default: 'text-[16px]' },

      titleFontSizeIos: { type: String, default: 'text-[17px]' },
      titleFontSizeMaterial: { type: String, default: 'text-[22px]' },

      titleMediumFontSizeIos: { type: String, default: 'text-[24px]' },
      titleMediumFontSizeMaterial: { type: String, default: 'text-[24px]' },

      titleLargeFontSizeIos: { type: String, default: 'text-[34px]' },
      titleLargeFontSizeMaterial: { type: String, default: 'text-[28px]' },

      scrollEl: { type: [Object, String], default: undefined },

      title: String,
      subtitle: String,
    },
    setup(props, ctx) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const elRef = ref(null);
      const titleContainerHeight = ref(0);
      const bgElRef = ref(null);
      const innerElRef = ref(null);
      const titleContainerElRef = ref(null);
      const titleElRef = ref(null);
      const subnavbarElRef = ref(null);

      const isScrollable = computed(
        () => props.transparent || props.large || props.medium
      );
      const wasScrollable = ref(isScrollable.value);

      const theme = useTheme(props, context);
      const colors = computed(() =>
        NavbarColors(props.colors || {}, useDarkClasses)
      );

      const NavbarContext = computed(() => ({
        navbar: true,
      }));
      provide('NavbarContext', NavbarContext);

      const c = useThemeClasses(props, () =>
        NavbarClasses(
          {
            ...props,
            left: ctx.slots.left,
            right: ctx.slots.right,
            centerTitle:
              typeof props.centerTitle === 'undefined'
                ? theme.value === 'ios'
                : props.centerTitle,
          },
          colors.value,
          ctx.attrs.class
        )
      );

      const getScrollEl = () => {
        if (typeof scrollEl === 'undefined') {
          return elRef.value && elRef.value.parentNode;
        }
        return props.scrollEl.value || props.scrollEl;
      };

      const onScroll = (e) => {
        if (!e) {
          e = {
            target: getScrollEl(),
          };
        }
        const { scrollTop } = e.target;
        if (!isScrollable.value) {
          if (wasScrollable.value) {
            if (titleElRef.value) {
              titleElRef.value.style.opacity = '';
            }
            if (bgElRef.value) {
              bgElRef.value.style.opacity = '';
            }
          }
          return;
        }

        const maxTranslate = titleContainerHeight.value;
        const scrollProgress = Math.max(
          Math.min(scrollTop / maxTranslate, 1),
          0
        );

        if (theme.value === 'material') {
          bgElRef.value.style.opacity = props.transparent
            ? -0.5 + scrollProgress * 1.5
            : '';
          if (props.medium || props.large) {
            bgElRef.value.style.transform = `translateY(-${
              scrollProgress * maxTranslate
            }px)`;
          }
        }

        if (titleContainerElRef.value) {
          titleContainerElRef.value.style.transform = `translateY(-${
            scrollProgress * maxTranslate
          }px)`;
          titleContainerElRef.value.style.opacity = 1 - scrollProgress * 2;
        }
        if (titleElRef.value) {
          titleElRef.value.style.opacity = -0.5 + scrollProgress * 1.5;
        }
        if ((props.medium || props.large) && subnavbarElRef.value) {
          subnavbarElRef.value.style.transform = `translateY(-${
            scrollProgress * maxTranslate
          }px)`;
        }
      };

      const initScroll = () => {
        if (!isScrollable.value) {
          if (wasScrollable.value) {
            onScroll({ target: { scrollTop: 0 } });
            wasScrollable.value = isScrollable.value;
          }
          return;
        }
        wasScrollable.value = isScrollable.value;

        if (titleContainerElRef.value) {
          titleContainerHeight.value = titleContainerElRef.value.offsetHeight;
        } else {
          titleContainerHeight.value = innerElRef.value.offsetHeight;
        }
        const scrollElLocal = getScrollEl();
        if (scrollElLocal) {
          scrollElLocal.addEventListener('scroll', onScroll);
          onScroll({ target: scrollElLocal });
        } else {
          onScroll({ target: { scrollTop: 0 } });
        }
      };

      const destroyScroll = () => {
        const scrollElLocal = getScrollEl();
        if (scrollElLocal) {
          scrollElLocal.removeEventListener('scroll', onScroll);
        }
      };

      const calcSize = () => {
        if (titleContainerElRef.value) {
          titleContainerHeight.value = titleContainerElRef.value.offsetHeight;
        } else {
          titleContainerHeight.value = innerElRef.value.offsetHeight;
        }
      };

      onUpdated(() => {
        calcSize();
        if (!wasScrollable.value && isScrollable.value) {
          initScroll();
        } else if (wasScrollable.value && !isScrollable.value) {
          onScroll();
          wasScrollable.value = isScrollable.value;
          destroyScroll();
        } else if (wasScrollable.value && isScrollable.value) {
          onScroll();
        }
      });
      onMounted(() => {
        calcSize();
        initScroll();
      });
      onBeforeUnmount(() => {
        destroyScroll();
      });

      return {
        c,
        slots: ctx.slots,
        elRef,
        bgElRef,
        innerElRef,
        titleContainerElRef,
        titleElRef,
        subnavbarElRef,
        theme,
      };
    },
  };
</script>
