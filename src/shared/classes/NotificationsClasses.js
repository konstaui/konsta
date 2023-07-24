import { cls } from '../cls.js';
import { positionClass } from '../position-class.js';

export const NotificationsClasses = (props, colors, classes) => {
  const { opened } = props;
  return {
    base: {
      common: cls(
        positionClass('absolute', classes),
        'z-50 transform transition-transform-opacity box-border',
        !opened && '-translate-y-full opacity-0 pointer-events-none'
      ),
      ios: cls(
        'rounded-xl px-2.5 py-2.5 start-2 end-2 top-2 shadow-lg',
        colors.bgIos
      ),
      material: cls(
        'rounded-2xl py-5 px-4 start-4 end-4 top-4',
        colors.bgMaterial
      ),
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
      ios: cls('mr-2'),
      material: 'me-4',
    },
    title: {
      ios: cls(
        'text-black tracking-wide dark:text-white text-[13px] uppercase'
      ),
      material: cls('font-medium'),
    },
    titleRightText: {
      ios: cls(
        'mr-1 ml-auto text-opacity-45 text-[13px] text-black dark:text-white dark:text-opacity-45'
      ),
      material: cls(
        'ml-1 text-xs before:w-0.75 before:h-0.75 before:rounded-full before:inline-block before:align-middle before:mr-1',
        colors.titleRightMd
      ),
    },
    button: {
      ios: cls('mr-1 ml-auto'),
      material: cls('ml-auto'),
    },
    subtitle: {
      ios: cls('text-black text-[15px] font-semibold dark:text-white'),
      material: cls('text-sm'),
    },
    text: {
      ios: cls('text-[15px]'),
      material: cls('text-sm', colors.textMaterial),
    },
  };
};
