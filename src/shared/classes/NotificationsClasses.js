import { cls } from '../cls.js';
import { positionClass } from '../position-class.js';

export const NotificationsClasses = (props, colors, classes) => {
  const { opened } = props;
  return {
    base: {
      common: cls(
        positionClass('absolute', classes),
        'z-50 transform transition-transform-opacity w-[calc(100%-32px)] box-border start-4 top-4',
        !opened && '-translate-y-full opacity-0 pointer-events-none'
      ),
      ios: 'bg-white shadow-[0_5px_25px_-10px_rgba(0,0,0,0.7)] rounded-xl px-2.5 py-2.5 dark:bg-[#1e1e1e]',
      material: 'bg-md-light-surface-5 rounded-2xl py-5 px-4',
      // ios: translucent && 'translucent',
    },
    content: {
      common: '',
      ios: 'mt-2.5',
      material: 'mt-2 ml-[calc(16px+16px)]',
    },
    header: {
      common: cls('flex justify-start items-center'),
    },
    icon: {
      common: cls('mr-2'),
    },
    title: {
      ios: cls('text-black tracking-wide dark:text-white'),
      material: cls('font-medium'),
    },
    titleRightText: {
      ios: cls(
        'mr-1 ml-auto text-opacity-45 text-black dark:text-white dark:text-opacity-45'
      ),
      material: cls(
        'ml-1 text-md-light-on-surface-variant text-xs before:w-0.75 before:h-0.75 before:rounded-full before:bg-md-light-on-surface-variant before:inline-block before:align-middle before:mr-1'
      ),
    },
    button: {
      ios: cls('mr-1 ml-auto'),
      material: cls('ml-auto'),
    },
    subtitle: {
      ios: cls('text-black font-semibold dark:text-white'),
    },
    text: {
      material: cls('text-md-light-on-surface-variant'),
    },
  };
};
