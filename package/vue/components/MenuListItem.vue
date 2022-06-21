<template>
  <k-list-item v-bind="listItemProps">
    <slot />
    <template v-if="slots.title" #title>
      <slot name="title" />
    </template>
    <template v-if="slots.media" #media>
      <slot name="media" />
    </template>
    <template v-if="slots.header" #header>
      <slot name="header" />
    </template>
    <template v-if="slots.after" #after>
      <slot name="after" />
    </template>
    <template v-if="slots.subtitle" #subtitle>
      <slot name="subtitle" />
    </template>
    <template v-if="slots.text" #text>
      <slot name="text" />
    </template>
    <template v-if="slots.footer" #footer>
      <slot name="footer" />
    </template>
    <template v-if="slots.inner" #inner>
      <slot name="inner" />
    </template>
    <template v-if="slots.content" #content>
      <slot name="content" />
    </template>
  </k-list-item>
</template>
<script>
  import { computed } from 'vue';
  import kListItem from './ListItem.vue';

  export default {
    name: 'k-menu-list-item',
    components: {
      kListItem,
    },
    props: {
      ...kListItem.props,
      href: { type: [String, Boolean], default: undefined },
      active: Boolean,
    },
    setup(props, ctx) {
      const listItemProps = computed(() => ({
        ...props,
        menuListItem: true,
        menuListItemActive: props.active,
        href: props.href || false,
      }));
      return {
        listItemProps,
        slots: ctx.slots,
      };
    },
  };
</script>
