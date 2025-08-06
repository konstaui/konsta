import { cls } from '../cls.js';

export const ToastClasses = (props, colors, baseClassName) => {
  const { opened } = props;
  return {
    base: {
      common: cls(
        'k-toast z-50 transform transition-(--transition-transform-opacity) w-auto start-0 bottom-0 fixed left-safe-4 right-safe-4 bottom-safe-4 flex',
        !opened && 'translate-y-full opacity-0 pointer-events-none',
        baseClassName
      ),
      left: 'justify-start',
      right: 'justify-end',
      center: 'justify-center',
    },
    inner: {
      common: '',
      ios: cls(
        `rounded-2xl duration-300 max-w-lg `,
        colors.textIos,
        colors.bgIos
      ),
      material: cls(
        `rounded-2xl duration-200 max-w-lg`,
        colors.textMaterial,
        colors.bgMaterial
      ),
    },
    content: {
      common: 'flex items-center justify-between',
      ios: 'pl-4 pr-4 pt-3 pb-3 sm:px-4 sm:py-3',
      material: 'pl-6 pr-6 py-3.5 pb-3.5 sm:px-6 sm:py-3.5',
    },
    button: {
      common: '-my-2 shrink-0 ms-4',
      ios: '',
      material: '-me-2',
    },
  };
};
