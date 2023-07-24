import { cls } from '../cls.js';

export const MessageClasses = (props, colors, { darkClasses }) => {
  const { type } = props;
  return {
    message: {
      common:
        'max-w-[70%] box-border flex relative z-1 transform translate-z-0 mb-2 first:mt-2',
    },
    messageSent: {
      common: 'self-end text-white',
    },
    messageReceived: {
      common: '',
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
        'rounded-full relative bg-cover self-end shrink-0 me-1.5 w-8 h-8'
      ),
    },
    messageContent: {
      common: 'flex flex-col',
    },
    messageBubble: {
      ...(type === 'sent' && {
        ios: cls(
          'bg-primary rounded-3xl box-border break-words flex flex-col relative rounded-2xl py-1.5 px-4'
        ),
        material: cls(
          'box-border break-words flex flex-col relative rounded-3xl py-2.5 px-4',
          colors.bubbleMdSent
        ),
      }),
      ...(type === 'received' && {
        ios: cls(
          'bg-[#e5e5ea] rounded-2xl box-border break-words flex flex-col relative rounded-2xl py-1.5 px-4',
          darkClasses('dark:bg-[#252525]')
        ),
        material: cls(
          'bg-[#e5e5ea] box-border break-words flex flex-col relative rounded-3xl py-2.5 px-4 ',
          colors.bubbleMdReceived
        ),
      }),
    },
    messageText: {
      common: 'w-full text-left leading-tight',
    },
  };
};
