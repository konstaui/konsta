import { cls } from '../cls.js';
import { filterColors } from '../filter-colors.js';

export const MessageColors = (colorsProp = {}, dark) => {
  return {
    messageSent: 'text-white',
    messageReceived: 'text-inherit',
    messageNameIos: cls('text-black/45', dark('dark:text-white/45')),
    messageNameMd: cls(
      'text-md-light-on-surface-variant',
      dark('dark:text-md-dark-on-surface-variant')
    ),
    bubbleSentIos: cls('bg-primary'),
    bubbleSentMd: cls(
      'bg-md-light-primary',
      dark('dark:bg-md-dark-primary dark:text-md-dark-on-primary')
    ),
    bubbleReceivedIos: cls('bg-[#e5e5ea]', dark('dark:bg-[#252525]')),
    bubbleReceivedMd: cls(
      dark('dark:bg-md-dark-surface-variant'),
      'bg-[#e5e5ea]'
    ),
    ...filterColors(colorsProp),
  };
};
