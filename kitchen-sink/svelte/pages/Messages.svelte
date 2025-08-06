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
    ToolbarPane,
  } from 'konsta/svelte';
  import { onMount } from 'svelte';
  import { CameraFill, ArrowUpCircleFill } from 'framework7-icons/svelte';
  import MdCameraAlt from '../components/MdCameraAlt.svelte';
  import MdSend from '../components/MdSend.svelte';

  let messageText = $state('');
  let isClickable = $state(false);
  let inputOpacity = $state(0.3);
  const onMessageTextChange = (e) => {
    messageText = e.target.value;
    isClickable = messageText.trim().length > 0;
    inputOpacity = messageText ? 1 : 0.3;
  };

  let messagesData = $state([
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

  const isPreview = document.location.href.includes('examplePreview');
  let shouldScrollMessages = $state(false);

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

  $effect(() => {
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
    {#snippet left()}
      {#if !isPreview}
        <NavbarBackLink onclick={() => history.back()} />
      {/if}
    {/snippet}
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
          {#snippet avatar()}
            <img
              alt="avatar"
              class="w-8 h-8 rounded-full"
              src={message.avatar}
            />
          {/snippet}
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
    class="z-20"
    placeholder="Message"
    value={messageText}
    onInput={onMessageTextChange}
  >
    {#snippet left()}
      <ToolbarPane class="ios:h-10">
        <Link iconOnly>
          <Icon>
            {#snippet ios()}
              <CameraFill class="w-5 h-5" />
            {/snippet}
            {#snippet material()}
              <MdCameraAlt
                class="w-6 h-6 fill-black dark:fill-md-dark-on-surface"
              />
            {/snippet}
          </Icon>
        </Link>
      </ToolbarPane>
    {/snippet}
    {#snippet right()}
      <ToolbarPane class="ios:h-10">
        <Link
          iconOnly
          onClick={() => (isClickable ? handleSendClick() : undefined)}
          style="opacity: {inputOpacity}; cursor: {isClickable
            ? 'pointer'
            : 'default'}"
        >
          <Icon>
            {#snippet ios()}
              <ArrowUpCircleFill
                class={`w-7 h-7${isClickable ? ' text-primary' : ''}`}
              />
            {/snippet}
            {#snippet material()}
              <MdSend class="w-6 h-6 fill-black dark:fill-md-dark-on-surface" />
            {/snippet}
          </Icon>
        </Link>
      </ToolbarPane>
    {/snippet}
  </Messagebar>
</Page>
