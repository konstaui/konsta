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
  import { CameraFill, ArrowUpCircleFill } from 'framework7-icons/svelte';
  import MdCameraAlt from '../components/MdCameraAlt.svelte';
  import MdSend from '../components/MdSend.svelte';
  import { onMount, afterUpdate } from 'svelte';

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
  ];

  const isPreview = document.location.href.includes('examplePreview');

  let messagesEndRef;

  const scrollToBottom = () => {
    if (messagesEndRef) {
      messagesEndRef.scrollIntoView({ behavior: 'smooth' });
    }
  };

  onMount(() => {
    scrollToBottom();
  });

  afterUpdate(() => {
    scrollToBottom();
  });

  const handleSendClick = () => {
    const text = messageText.replace(/\n/g, '<br>').trim();
    const type = 'sent';
    if (text.length) {
      const messageToSend = { text, type };
      messagesData = [...messagesData, messageToSend];
      messageText = '';
      inputOpacity = 0.3;
    } else {
      return;
    }
  };

</script>

<Page>
  <Navbar title="Messages">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink onClick={() => history.back()} />
      {/if}
    </svelte:fragment>
  </Navbar>
  <Messages>
    <MessagesTitle>
      <b>Thursday, July 13,</b> 11:03
    </MessagesTitle>
    {#each messagesData as message, index (index)}
      <Message
        key={index}
        type={message.type}
        name={message.name}
        text={message.text}
        avatar={message.avatar}
      />
    {/each}
    <div bind:this={messagesEndRef} />
  </Messages>
  <Messagebar
    placeholder="Message"
    value={messageText}
    onInput={onMessageTextChange}
  >
    <Link toolbar iconOnly slot="left">
        <Icon>
          <CameraFill  slot="ios" class="w-7 h-7"/>
          <MdCameraAlt slot="material" class="w-6 h-6 fill-black dark:fill-md-dark-on-surface" />
        </Icon>
    </Link>
    <Link
      toolbar
      slot="right"
      onClick={() => isClickable ? handleSendClick() : undefined}
      style="opacity: {inputOpacity}; cursor: {isClickable ? 'pointer' : 'default'}"
    >
      <Icon>
        <ArrowUpCircleFill  slot="ios" class="w-7 h-7"/>
        <MdSend slot="material" class="w-6 h-6 fill-black dark:fill-md-dark-on-surface" />
      </Icon>
  </Link>
  </Messagebar>
</Page>


