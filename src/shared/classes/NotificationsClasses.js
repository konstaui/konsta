import { cls } from '../cls.js';
import { positionClass } from '../position-class.js';

export const NotificationsClasses = (props, colors, classes) => {
  const { opened, translucent } = props;
  return {
    base: {
      common: cls(
        positionClass('absolute', classes),
        'z-50 transform transition-transform-opacity box-border duration-500',
        !opened &&
          '-translate-y-full opacity-0 pointer-events-none transition duration-500',
        'md:w-[568px] md:end-auto md:start-1/2 md:-ms-[256px]'
      ),
      ios: cls(
        'rounded-xl px-2.5 py-2.5 start-2 end-2 top-2 shadow-lg',
        colors.bgIos,
        translucent && 'translucent'
      ),
      material: cls(
        'rounded-2xl py-5 px-4 start-4 end-4 top-4',
        colors.bgMaterial
      ),
    },
    content: {
      common: '',
      ios: 'mt-2.5 ',
      material: cls('mt-2'),
    },
    header: {
      common: cls('flex justify-start'),
      ios: 'items-center',
      material: 'items-start',
    },
    icon: {
      ios: cls('me-2'),
      material: 'me-4',
    },
    contentTitle: {
      material: cls('flex flex-row items-center'),
    },
    title: {
      ios: cls('tracking-wide text-[13px] uppercase', colors.titleIos),
      material: cls('font-medium'),
    },
    titleRightText: {
      ios: cls('me-1 ms-auto text-[13px]', colors.titleRightIos),
      material: cls(
        'ms-1 text-xs before:w-0.75 before:h-0.75 before:rounded-full before:inline-block before:align-middle before:me-1',
        colors.titleRightMd
      ),
    },
    button: {
      ios: cls('me-1 ms-auto cursor-pointer'),
      material: cls('ms-auto cursor-pointer'),
    },
    deleteIcon: {
      ios: cls('w-5 h-5', colors.deleteIconIos),
      material: cls('w-6 h-6', colors.deleteIconMd),
    },
    subtitle: {
      ios: cls('text-[15px] font-semibold', colors.subtitleIos),
      material: cls('text-sm'),
    },
    text: {
      ios: cls('text-[15px]'),
      material: cls('text-sm', colors.textMaterial),
    },
  };
};
