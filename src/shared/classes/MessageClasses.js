import { cls } from '../cls.js';

export const MessageClasses = (props, colors, { darkClasses }) => {
  return {
    message: {
      common:
        'max-w-[70%] box-border flex relative z-1 transform translate-z-0',
    },
    messageSent: {
      common: 'text-right self-end',
      ios: cls('mr-3'),
      material: 'mr-2',
    },
    messageReceived: {
      common: '',
    },
    messageName: {
      ios: 'mb-0.5 ml-4',
      material: '',
    },
    messageContent: {
      common: 'flex flex-col',
    },
    messageBubble: {
      common: cls(
        'min-w-12 min-h-8.5 box-border break-words flex flex-col relative py-1.5 pr-4 pl-5.5',
      ),
    },
    messageText: {
      common: 'text-black w-full',
    },
  };
};
