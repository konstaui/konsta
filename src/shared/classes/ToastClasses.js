import { cls } from '../cls.js';
import { positionClass } from '../position-class.js';

export const ToastClasses = (props, colors, classes) => {
  const { translucent, opened } = props;
  return {
    base: {
      common: cls(
        positionClass('fixed', classes),
        'z-50 transform transition-transform-opacity w-full sm:w-auto start-0 bottom-0 sm:max-w-lg',
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
      left: 'sm:start-4-safe sm:bottom-4-safe',
      right: 'sm:end-4-safe sm:bottom-4-safe sm:start-auto',
      center: 'sm:left-1/2 sm:bottom-4-safe sm:-translate-x-1/2',
    },
    content: {
      common: 'flex items-center justify-between',
      ios: 'pl-4-safe pr-4-safe pt-3 pb-3-safe sm:px-4 sm:py-3',
      material: 'pl-6-safe pr-6-safe py-3.5 pb-3.5-safe sm:px-6 sm:py-3.5',
    },
    button: {
      common: '-my-2 shrink-0 ms-4',
      ios: '',
      material: '-me-2',
    },
  };
};
