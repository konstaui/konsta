import { cls } from '../cls.js';

export const ToastClasses = (props, colors) => {
  const { translucent, opened } = props;
  return {
    base: {
      common: cls(
        'z-50 transform transition-(--transition-transform-opacity) w-full sm:w-auto start-0 bottom-0 sm:max-w-lg fixed',
        !opened && 'translate-y-full opacity-0 pointer-events-none'
      ),
      ios: cls(
        `sm:rounded-lg duration-300`,
        colors.textIos,
        colors.bgIos,
        translucent && 'translucent'
      ),
      material: cls(
        `sm:rounded-2xl duration-200`,
        colors.textMaterial,
        colors.bgMaterial
      ),
      left: 'sm:start-safe-4 sm:bottom-safe-4',
      right: 'sm:end-safe-4 sm:bottom-safe-4 sm:start-auto',
      center: 'sm:left-1/2 sm:bottom-safe-4 sm:-translate-x-1/2',
    },
    content: {
      common: 'flex items-center justify-between',
      ios: 'pl-safe-4 pr-safe-4 pt-3 pb-safe-3 sm:px-4 sm:py-3',
      material: 'pl-safe-6 pr-safe-6 py-3.5 pb-safe-3.5 sm:px-6 sm:py-3.5',
    },
    button: {
      common: '-my-2 shrink-0 ms-4',
      ios: '',
      material: '-me-2',
    },
  };
};
