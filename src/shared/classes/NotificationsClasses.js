import { cls } from '../cls.js';
import { positionClass } from '../position-class.js';

export const NotificationsClasses = (props, colors, classes) => {
  const { opened } = props;
  return {
    base: {
      common: cls(
        positionClass('absolute', classes),
        'z-50 transform transition-transform-opacity w-[calc(100%-32px)] start-4 top-4 box-border',
        !opened && '-translate-y-full opacity-0 pointer-events-none'
      ),
      ios: 'bg-white shadow-[0_5px_25px_-10px_rgba(0,0,0,0.7)] rounded-xl px-2.5 py-2.5',
      // ios: translucent && 'translucent',
    },
    content: {
      common: '',
      ios: 'mt-2.5',
      material: '',
    },
    header: {
      ios: cls('flex justify-start items-center'),
    },
    icon: {
      ios: cls('mr-2'),
    },
    title: {
      ios: cls('text-black tracking-wide'),
    },
    titleRightText: {
      ios: cls('mr-1 ml-auto text-opacity-45 text-black'),
    },
    subtitle: {
      ios: cls('text-black font-semibold'),
    },
    button: {
      common: '-my-2 shrink-0 ms-4',
      ios: '',
      material: '-me-2',
    },
  };
};
