import { cls } from '../cls.js';

export const MessageClasses = (props, colors, { darkClasses }) => {
  const { type } = props;
  return {
    message: {
      common:
        'max-w-[70%] box-border flex relative z-1 transform translate-z-0 mt-2.5',
    },
    messageSent: {
      common: 'self-end text-white -mb-2',
      ios: '',
      material: '',
    },
    messageReceived: {
      common: '',
    },
    messageLast: {
      common: 'mb-2.5',
    },
    messageName: {
      common: 'text-xs',
      ios: cls(
        'mb-0.5 ml-4 text-black text-opacity-45',
        darkClasses('dark:text-white dark:text-opacity-45')
      ),
      material: cls('ml-4 mb-0.5', colors.messageNameMd),
    },
    messageAvatar: {
      common: cls(
        'rounded-full relative bg-cover self-end shrink-0 w-7 h-7 mr-1.5'
      ),
    },
    messageContent: {
      common: 'flex flex-col',
    },
    messageBubble: {
      ...(type === 'sent' && {
        ios: cls(
          'bg-primary text-lg rounded-2xl box-border break-words flex flex-col relative rounded-2xl py-1.5 pr-4 pl-5.5  min-w-48'
        ),
        material: cls(
          'box-border break-words flex flex-col relative rounded-2xl py-2.5 px-4 min-w-48',
          colors.bubbleMdSent
        ),
      }),
      ...(type === 'received' && {
        ios: cls(
          'bg-[#e5e5ea] text-lg rounded-2xl box-border break-words flex flex-col relative rounded-2xl py-1.5 pr-4 pl-5.5  min-w-48',
          darkClasses('dark:bg-[#252525]')
        ),
        material: cls(
          'bg-[#e5e5ea] box-border break-words flex flex-col relative rounded-2xl py-2.5 px-4  min-w-48',
          colors.bubbleMdReceived
        ),
      }),
    },
    messageText: {
      common: 'w-full text-left',
    },
  };
};
