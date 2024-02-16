<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    Messagebar,
    Messages,
    Message,
    MessagesTitle,
    Icon,
    Link,
  } from 'konsta/svelte';
  import { onMount, afterUpdate } from 'svelte';
  import { CameraFill, ArrowUpCircleFill } from 'framework7-icons/svelte';
  import MdCameraAlt from '../components/MdCameraAlt.svelte';
  import MdSend from '../components/MdSend.svelte';

  let messageText = '';
  let isClickable;
  let inputOpacity = 0.3;
  const onMessageTextChange = (e) => {
    messageText = e.target.value;
    isClickable = messageText.trim().length > 0;
    inputOpacity = messageText ? 1 : 0.3;
  };

  let messagesData = [
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
  ];

  const isPreview = document.location.href.includes('examplePreview');
  let shouldScrollMessages = false;

  const scrollToBottom = (animate = true) => {
    const pageEl = document.querySelector('.messages-page');
    pageEl.scrollTo({
      top: pageEl.scrollHeight - pageEl.offsetHeight,
      behavior: animate ? 'smooth' : 'auto',
    });
  };

  onMount(() => {
    scrollToBottom(false);
  });

  afterUpdate(() => {
    if (shouldScrollMessages) {
      scrollToBottom();
      shouldScrollMessages = false;
    }
  });

  const handleSendClick = () => {
    const text = messageText.replace(/\n/g, '<br>').trim();
    const type = 'sent';
    if (text.length) {
      const messageToSend = { text, type };
      messagesData = [...messagesData, messageToSend];
      messageText = '';
      inputOpacity = 0.3;
      shouldScrollMessages = true;
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
</script>

<Page class="ios:bg-white ios:dark:bg-black messages-page">
  <Navbar title="Messages">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink onClick={() => history.back()} />
      {/if}
    </svelte:fragment>
  </Navbar>
  <Messages>
    <MessagesTitle>
      <b>{currentDay}</b> , {currentTime}
    </MessagesTitle>
    {#each messagesData as message, index (index)}
      {#if message.type === 'received'}
        <Message
          key={index}
          type={message.type}
          name={message.name}
          text={message.text}
        >
          <img
            slot="avatar"
            alt="avatar"
            class="w-8 h-8 rounded-full"
            src={message.avatar}
          />
        </Message>
      {:else}
        <Message
          key={index}
          type={message.type}
          name={message.name}
          text={message.text}
        />
      {/if}
    {/each}
  </Messages>
  <Messagebar
    placeholder="Message"
    value={messageText}
    onInput={onMessageTextChange}
  >
    <Link toolbar iconOnly slot="left">
      <Icon>
        <CameraFill slot="ios" class="w-7 h-7" />
        <MdCameraAlt
          slot="material"
          class="w-6 h-6 fill-black dark:fill-md-dark-on-surface"
        />
      </Icon>
    </Link>
    <Link
      toolbar
      slot="right"
      onClick={() => (isClickable ? handleSendClick() : undefined)}
      style="opacity: {inputOpacity}; cursor: {isClickable
        ? 'pointer'
        : 'default'}"
    >
      <Icon>
        <ArrowUpCircleFill slot="ios" class="w-7 h-7" />
        <MdSend
          slot="material"
          class="w-6 h-6 fill-black dark:fill-md-dark-on-surface"
        />
      </Icon>
    </Link>
  </Messagebar>
</Page>
