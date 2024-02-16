<template>
  <k-page class="ios:bg-white ios:dark:bg-black messages-page">
    <k-navbar title="Messages">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
    </k-navbar>
    <k-messages>
      <k-messages-title
        ><b>{{ currentDay }}</b
        >, {{ currentTime }}</k-messages-title
      >
      <k-message
        v-for="(message, index) in messagesData"
        :key="index"
        :type="message.type"
        :name="message.name"
        :text="message.text"
      >
        <template v-if="message.type === 'received'" #avatar>
          <img
            alt="avatar"
            class="w-8 h-8 rounded-full"
            :src="message.avatar"
          />
        </template>
      </k-message>
    </k-messages>
    <k-messagebar
      placeholder="Message"
      :value="messageText"
      @input="onMessageTextChange"
    >
      <template #left>
        <k-link toolbar icon-only>
          <k-icon>
            <template #ios><CameraFill class="w-7 h-7" /></template>
            <template #material>
              <MdCameraAlt
                class="w-6 h-6 fill-black dark:fill-md-dark-on-surface"
              />
            </template>
          </k-icon>
        </k-link>
      </template>
      <template #right>
        <k-link
          toolbar
          :style="{
            opacity: inputOpacity,
            cursor: isClickable ? 'pointer' : 'default',
          }"
          @click="onClick"
        >
          <k-icon>
            <template #ios><ArrowUpCircleFill class="w-7 h-7" /></template>
            <template #material>
              <MdSend class="w-6 h-6 fill-black dark:fill-md-dark-on-surface" />
            </template>
          </k-icon>
        </k-link>
      </template>
    </k-messagebar>
  </k-page>
</template>
<script>
  import { ref, onMounted, watch, nextTick } from 'vue';
  import {
    kPage,
    kNavbar,
    kNavbarBackLink,
    kMessagebar,
    kMessages,
    kMessage,
    kMessagesTitle,
    kIcon,
    kLink,
  } from 'konsta/vue';
  import { CameraFill, ArrowUpCircleFill } from 'framework7-icons/vue';
  import MdCameraAlt from '../components/MdCameraAlt.vue';
  import MdSend from '../components/MdSend.vue';

  export default {
    name: 'MessagesPage',
    components: {
      kPage,
      kNavbar,
      kNavbarBackLink,
      kMessagebar,
      kMessages,
      kMessage,
      kMessagesTitle,
      kIcon,
      kLink,

      CameraFill,
      ArrowUpCircleFill,
      MdCameraAlt,
      MdSend,
    },
    setup() {
      const messageText = ref('');
      const isClickable = ref(false);
      const inputOpacity = ref(0.3);

      const onMessageTextChange = (e) => {
        messageText.value = e.target.value;
        isClickable.value = messageText.value.trim().length > 0;
      };

      watch(messageText, (newValue) => {
        inputOpacity.value = newValue ? 1 : 0.3;
      });

      const messagesData = ref([
        {
          type: 'sent',
          text: 'Hi, Kate',
        },
        {
          type: 'sent',
          text: 'How are you?',
        },
        {
          name: 'Kate',
          type: 'received',
          text: 'Hi, I am good!',
          avatar: 'https://cdn.framework7.io/placeholder/people-100x100-9.jpg',
        },
        {
          name: 'Blue Ninja',
          type: 'received',
          text: 'Hi there, I am also fine, thanks! And how are you?',
          avatar: 'https://cdn.framework7.io/placeholder/people-100x100-7.jpg',
        },
        {
          type: 'sent',
          text: 'Hey, Blue Ninja! Glad to see you ;)',
        },
        {
          type: 'sent',
          text: 'How do you feel about going to the movies today?',
        },
        {
          name: 'Kate',
          type: 'received',
          text: ' Oh, great idea!',
          avatar: 'https://cdn.framework7.io/placeholder/people-100x100-9.jpg',
        },
        {
          name: 'Kate',
          type: 'received',
          text: ' What cinema are we going to?',
          avatar: 'https://cdn.framework7.io/placeholder/people-100x100-9.jpg',
        },
        {
          name: 'Blue Ninja',
          type: 'received',
          text: 'Great. And what movie?',
          avatar: 'https://cdn.framework7.io/placeholder/people-100x100-7.jpg',
        },
        {
          name: 'Blue Ninja',
          type: 'received',
          text: 'What time?',
          avatar: 'https://cdn.framework7.io/placeholder/people-100x100-7.jpg',
        },
      ]);
      const scrollToBottom = (animate = true) => {
        const pageEl = document.querySelector('.messages-page');
        pageEl.scrollTo({
          top: pageEl.scrollHeight - pageEl.offsetHeight,
          behavior: animate ? 'smooth' : 'auto',
        });
      };
      onMounted(() => scrollToBottom(false));
      watch(messagesData, () => {
        scrollToBottom();
      });

      const handleSendClick = () => {
        const text = messageText.value.replace(/\n/g, '<br>').trim();
        const type = 'sent';
        const messagesToSend = [];

        if (text.length) {
          messagesToSend.push({
            text,
            type,
          });

          console.log(messagesToSend);
        }

        if (messagesToSend.length === 0) {
          return;
        }

        messagesData.value.push(...messagesToSend);
        messageText.value = '';

        nextTick(() => {
          scrollToBottom();
        });
      };

      const onClick = () => {
        if (isClickable.value) {
          handleSendClick();
        }
      };

      const dateFormatter = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
      });

      const timeFormatter = new Intl.DateTimeFormat('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
      });

      const currentDate = new Date();
      const currentDay = dateFormatter.format(currentDate);
      const currentTime = timeFormatter.format(currentDate);

      return {
        onClick,
        messageText,
        messagesData,
        onMessageTextChange,
        handleSendClick,
        inputOpacity,
        isClickable,
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
        currentDay,
        currentTime,
      };
    },
  };
</script>
