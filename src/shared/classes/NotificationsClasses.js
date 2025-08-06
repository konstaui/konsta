import { cls } from '../cls.js';

export const NotificationsClasses = (props, colors, baseClassName) => {
  const { opened } = props;
  return {
    base: {
      common: cls(
        'k-notifications z-50 transform transition-(--transition-transform-opacity) box-border duration-500 absolute',
        !opened &&
          '-translate-y-full opacity-0 pointer-events-none transition duration-500',
        'md:w-[568px] md:end-auto md:start-1/2 md:-ms-[284px]',
        baseClassName
      ),
      ios: cls(
        'rounded-xl p-4 start-2 end-2 top-safe-2 rounded-3xl flex gap-4 items-center',
        colors.bgIos
      ),
      material: cls(
        'rounded-2xl py-5 px-4 start-4 end-4 top-safe-4',
        colors.bgMaterial
      ),
    },
    content: {
      common: 'w-full shrink',
      ios: '',
      material: cls('mt-2'),
    },
    header: {
      common: cls('flex justify-start'),
      ios: 'items-center',
      material: 'items-start',
    },
    icon: {
      ios: 'shrink-0',
      material: 'me-4',
    },
    contentTitle: {
      material: cls('flex flex-row items-center'),
    },
    title: {
      ios: cls('text-sm font-bold', colors.titleIos),
      material: cls('font-medium'),
    },
    titleRightText: {
      ios: cls('me-1 ms-auto text-sm', colors.titleRightIos),
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
      ios: cls('text-sm font-semibold', colors.subtitleIos),
      material: cls('text-sm'),
    },
    text: {
      ios: cls('text-sm'),
      material: cls('text-sm', colors.textMaterial),
    },
  };
};
