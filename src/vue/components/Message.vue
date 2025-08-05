<template>
  <component :is="component" :id="id" ref="elRef" :class="classes">
    <div v-if="avatar || $slots.avatar" :class="c.messageAvatar">
      {{ avatar }}<slot name="avatar" />
    </div>
    <div :class="c.messageContent">
      <div v-if="name || $slots.name" :class="c.messageName">
        {{ name }}<slot name="name" />
      </div>
      <div v-if="header || $slots.header" :class="c.messageHeader">
        {{ header }}<slot name="header" />
      </div>
      <div :class="c.messageBubble">
        <div
          v-if="textHeader || $slots.textHeader"
          :class="c.messageTextHeader"
        >
          {{ textHeader }}<slot name="textHeader" />
        </div>
        <div v-if="text || $slots.text" :class="c.messageText">
          {{ text }}<slot name="text" />
        </div>
        <div
          v-if="textFooter || $slots.textFooter"
          :class="c.messageTextFooter"
        >
          {{ textFooter }}<slot name="textFooter" />
        </div>
        <div v-if="footer || $slots.footer" :class="c.messageFooter">
          {{ footer }}<slot name="footer" />
        </div>
      </div>
    </div>
  </component>
</template>
<script>
  import { ref, computed } from 'vue';
  import { useContext } from '../shared/use-context.js';
  import { cls } from '../../shared/cls.js';
  import { MessageClasses } from '../../shared/classes/MessageClasses.js';
  import { MessageColors } from '../../shared/colors/MessageColors.js';
  import { darkClasses } from '../shared/use-dark-classes.js';
  import { themeClasses } from '../shared/use-theme-classes.js';

  export default {
    name: 'k-message',
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
      text: String,
      name: String,
      type: { type: String, default: 'sent' },
      header: String,
      footer: String,
      textHeader: String,
      textFooter: String,
      avatar: { type: String, default: null },
    },
    setup(props, ctx) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const elRef = ref(null);

      const colors = computed(() =>
        MessageColors(props.colors || {}, useDarkClasses)
      );

      const c = useThemeClasses(props, () =>
        MessageClasses({ ...props }, colors.value, ctx.attrs.class)
      );

      const classes = computed(() =>
        cls(
          c.value.message,
          props.type === 'sent' && c.value.messageSent,
          props.type === 'received' && c.value.messageReceived
        )
      );
      return {
        c,
        classes,
        elRef,
        slots: ctx.slots,
      };
    },
  };
</script>
