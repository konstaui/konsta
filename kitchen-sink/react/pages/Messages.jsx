/* eslint-disable react/no-array-index-key */
import { React, useState } from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  Messagebar,
  Messages,
  Message,
  Link,
  Icon,
} from 'konsta/react';
import { CameraFill, ArrowUpCircleFill } from 'framework7-icons/react';
import { MdCameraAlt, MdSend } from 'react-icons/md';

export default function MessagesPage() {
  const isPreview = document.location.href.includes('examplePreview');
  // const theme = useTheme();
  // const CameraIcon = theme === 'ios' ? Camera : MdCameraAlt;
  const [messageText, setMessageText] = useState('');
  const [messagesData, setMessagesData] = useState([
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
    },
    {
      name: 'Blue Ninja',
      type: 'received',
      text: 'Hi there, I am also fine, thanks! And how are you?',
    },
    {
      type: 'sent',
      text: 'Hey, Blue Ninja! Glad to see you ;)',
    },
    {
      type: 'sent',
      text: 'Hey, look, cutest kitten ever!',
    },
  ]);
  const isFirstMessage = (message, index) => {
    const previousMessage = messagesData[index - 1];
    if (message.isTitle) return false;
    if (
      !previousMessage ||
      previousMessage.type !== message.type ||
      previousMessage.name !== message.name
    )
      return true;
    return false;
  };
  const isLastMessage = (message, index) => {
    const nextMessage = messagesData[index + 1];
    if (message.isTitle) return false;
    if (
      !nextMessage ||
      nextMessage.type !== message.type ||
      nextMessage.name !== message.name
    )
      return true;
    return false;
  };
  const isTailMessage = (message, index) => {
    const nextMessage = messagesData[index + 1];
    if (message.isTitle) return false;
    if (
      !nextMessage ||
      nextMessage.type !== message.type ||
      nextMessage.name !== message.name
    )
      return true;
    return false;
  };

  const handleSendClick = () => {
    const text = messageText.replace(/\n/g, '<br>').trim();
    const messagesToSend = [];
    if (text.length) {
      messagesToSend.push({
        text,
      });
    }
    if (messagesToSend.length === 0) {
      return;
    }
    setMessagesData([...messagesData, ...messagesToSend]);
    setMessageText('');

    // console.log('click');
    // const value = messageText;
    // console.log(value);
    // setMessageText('');
  };

  return (
    <Page>
      <Navbar
        title="Messages"
        left={!isPreview && <NavbarBackLink onClick={() => history.back()} />}
      />
      <Messages>
        {messagesData.map((message, index) => (
          <Message
            key={index}
            type={message.type}
            name={message.name}
            text={message.text}
            first={isFirstMessage(message, index)}
            last={isLastMessage(message, index)}
            tail={isTailMessage(message, index)}
          />
        ))}
      </Messages>

      <Messagebar
        placeholder="Message"
        value={messageText}
        onInput={(e) => setMessageText(e.target.value)}
      >
        <Link onClick={() => console.log('click')} toolbar iconOnly>
          <Icon
            ios={<CameraFill className="w-7 h-7" />}
            material={<MdCameraAlt className="w-6 h-6 fill-black" />}
          />
        </Link>
        <Link onClick={handleSendClick} toolbar>
          <Icon
            ios={<ArrowUpCircleFill className="w-7 h-7" />}
            material={<MdSend className="w-6 h-6 fill-black" />}
          />
        </Link>
      </Messagebar>
    </Page>
  );
}

MessagesPage.displayName = 'MessagesPage';
