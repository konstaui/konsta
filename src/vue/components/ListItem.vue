<template>
  <component :is="component" v-if="divider || groupTitle" :class="c.divider">
    {{ title }}
    <slot name="title" />
    <slot />
  </component>
  <component :is="component" v-else :class="c.base">
    <component
      :is="ItemContentComponent"
      ref="rippleElRef"
      :class="itemContentClasses"
      v-bind="linkPropsComputed"
    >
      <div v-if="media || slots.media" :class="c.media">
        {{ media }}<slot name="media" />
      </div>
      <div :class="c.inner">
        <div v-if="header || slots.header" :class="c.header">
          {{ header }}<slot name="header" />
        </div>
        <div
          v-if="title || after || slots.title || slots.after"
          :class="c.titleWrap"
        >
          <div v-if="title || slots.title" :class="titleClasses">
            {{ title }}<slot name="title" />
          </div>
          <div v-if="after || slots.after" :class="c.after">
            {{ after }}<slot name="after" />
          </div>
          <chevron-icon
            v-if="isLink && chevron && !menuListItem"
            :class="c.chevron"
          />
        </div>
        <div v-if="subtitle || slots.subtitle" :class="c.subtitle">
          {{ subtitle }}<slot name="subtitle" />
        </div>
        <div v-if="text || slots.text" :class="c.text">
          {{ text }}<slot name="text" />
        </div>
        <div v-if="footer || slots.footer" :class="c.footer">
          {{ footer }}<slot name="footer" />
        </div>
        <slot name="inner" />
      </div>
      <slot name="content" />
    </component>
    <slot />
  </component>
</template>
<script>
  import { ref, computed } from 'vue';
  import { cls } from '../shared/cls.js';
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';
  import ChevronIcon from './icons/ChevronIcon.vue';
  import { useDarkClasses } from '../shared/use-dark-classes.js';

  export default {
    name: 'twm-list-item',
    components: {
      ChevronIcon,
    },
    props: {
      component: {
        type: String,
        default: 'li',
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
      mediaClass: { type: String, default: '' },
      innerClass: { type: String, default: '' },
      contentClass: { type: String, default: '' },
      titleWrapClass: { type: String, default: '' },
      titleFontSizeIos: { type: String, default: 'text-list-title-ios' },
      titleFontSizeMaterial: {
        type: String,
        default: 'text-list-title-material',
      },

      // Content props
      title: { type: String, default: undefined },
      subtitle: { type: String, default: undefined },
      text: { type: String, default: undefined },
      after: { type: String, default: undefined },
      media: { type: String, default: undefined },
      header: { type: String, default: undefined },
      footer: { type: String, default: undefined },

      menuListItem: { type: Boolean, default: false },
      menuListItemActive: { type: Boolean, default: false },

      hairlines: { type: Boolean, default: true },

      // Enable divider
      divider: { type: Boolean, default: false },
      groupTitle: { type: Boolean, default: false },

      // Title
      strongTitle: { type: [String, Boolean], default: 'auto' },

      // Label props
      label: { type: Boolean, default: false },

      // Link props
      chevron: { type: Boolean, default: true },
      href: { type: [Boolean, String], default: undefined },
      target: { type: String, default: undefined },

      link: { type: Boolean, default: undefined },
      linkComponent: { type: String, default: 'a' },
      linkProps: { type: Object, default: () => ({}) },

      touchRipple: { type: Boolean, default: true },
    },
    setup(props, ctx) {
      const rippleElRef = ref(null);

      const colors = computed(() => ({
        text: cls(`text-black`, useDarkClasses('dark:text-white')),
        menuListItemText: cls(
          `text-primary`,
          useDarkClasses('dark:text-white')
        ),
        menuListItemActiveBg: 'bg-primary dark:bg-primary',
        ...(props.colors || {}),
      }));

      const isMenuListItemActive = computed(
        () => props.menuListItem && props.menuListItemActive
      );

      const textColor = computed(() =>
        isMenuListItemActive.value
          ? colors.value.menuListItemText
          : colors.value.text
      );

      const isLink = computed(
        () =>
          !!props.href || props.href === '' || props.menuListItem || props.link
      );
      const isLabel = computed(() => !!props.label);

      const theme = useTheme(props);

      const needsTouchRipple = computed(
        () =>
          theme.value === 'material' &&
          (isLabel.value || isLink.value) &&
          props.touchRipple
      );
      useTouchRipple(rippleElRef, props, () => isLabel.value || isLink.value);

      const hrefComputed = computed(() =>
        props.href === true ||
        props.href === false ||
        typeof props.href === 'undefined'
          ? undefined
          : props.href || ''
      );
      const ItemContentComponent = computed(() =>
        isLink.value ? props.linkComponent : isLabel.value ? 'label' : 'div'
      );
      const linkPropsComputed = computed(() =>
        isLink.value
          ? {
              href: hrefComputed.value,
              target: props.target,
              ...(props.linkProps || {}),
            }
          : {}
      );

      const autoStrongTitle = computed(
        () =>
          props.strongTitle === 'auto' &&
          (props.title || ctx.slots.title) &&
          (props.subtitle || ctx.slots.subtitle || props.text || ctx.slots.text)
      );

      const c = useThemeClasses(props, () => ({
        base: props.menuListItem ? `${textColor.value} py-1` : '',
        itemContent: {
          common: cls(
            props.menuListItem
              ? 'pl-2 ml-2-safe mr-2-safe rounded-lg'
              : 'pl-4-safe',
            `flex items-center ${props.contentClass}`
          ),
          link: cls(
            'duration-300 active:duration-0 cursor-pointer select-none',
            props.hairlines && 'active:hairline-transparent',
            needsTouchRipple.value &&
              cls(
                `relative overflow-hidden`,
                useDarkClasses('dark:touch-ripple-white z-10')
              ),
            isMenuListItemActive.value
              ? cls(colors.value.menuListItemActiveBg, 'bg-opacity-15')
              : cls(
                  `active:bg-black active:bg-opacity-10`,
                  useDarkClasses(
                    'dark:active:bg-white dark:active:bg-opacity-10'
                  )
                )
          ),
        },

        media: {
          common: `mr-4 shrink-0 ${props.mediaClass}`,
          ios: 'py-2',
          material: 'py-3 min-w-10',
        },
        inner: {
          common: cls(
            'pr-4-safe w-full relative',
            !props.menuListItem && props.hairlines && 'hairline-b',
            props.innerClass
          ),
          ios: 'py-2.5',
          material: 'py-3',
        },
        titleWrap: {
          common: cls(
            `flex justify-between items-center ${props.titleWrapClass}`
          ),
          ios: cls(!props.menuListItem && props.titleFontSizeIos),
          material: cls(!props.menuListItem && props.titleFontSizeMaterial),
        },
        title: {
          common: `shrink`,
          menuListItem: cls(
            'text-sm',
            props.strongTitle === true || autoStrongTitle.value
              ? 'font-semibold'
              : 'font-medium'
          ),
          strong: {
            common: '',
            ios: 'font-semibold',
            material: 'font-medium',
          },
        },
        after: cls(
          textColor.value,
          `text-opacity-55 shrink-0 ml-auto pl-1 flex items-center space-x-1`,
          useDarkClasses('dark:text-opacity-55')
        ),
        chevron: 'opacity-20 shrink-0 ml-3',
        subtitle: 'text-sm',
        text: cls(
          textColor.value,
          `text-sm text-opacity-55 line-clamp-2`,
          useDarkClasses('dark:text-opacity-55')
        ),
        header: 'text-xs mb-0.5',
        footer: cls(
          textColor.value,
          `text-xs text-opacity-55 mt-0.5`,
          useDarkClasses('dark:text-opacity-55')
        ),

        divider: {
          common: cls(
            `bg-list-divider-light text-black text-opacity-55 pl-4-safe pr-4-safe py-1 flex items-center z-20`,
            props.divider ? 'relative' : 'sticky top-0',
            useDarkClasses(
              `dark:bg-list-divider-dark dark:text-white dark:text-opacity-55`
            )
          ),
          ios: `h-8${
            props.hairlines ? ' hairline-t' : ''
          } -mt-px text-list-title-ios`,
          material: 'h-12 text-list-title-material',
        },
      }));

      const itemContentClasses = computed(() =>
        isLink.value || isLabel.value
          ? c.value.itemContent.link
          : c.value.itemContent.default
      );

      const titleClasses = computed(() =>
        props.menuListItem
          ? c.value.title.menuListItem
          : props.strongTitle === true || autoStrongTitle.value
          ? c.value.title.strong
          : c.value.title.default
      );

      return {
        rippleElRef,
        ItemContentComponent,
        isLink,
        c,
        linkPropsComputed,
        itemContentClasses,
        titleClasses,
        slots: ctx.slots,
      };
    },
  };
</script>
