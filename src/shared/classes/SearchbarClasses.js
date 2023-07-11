import { cls } from '../cls.js';

export const SearchbarClasses = (props, colors, { isEnabled, darkClasses }) => {
  return {
    base: {
      common: 'relative flex overflow-hidden items-center',
      ios: 'px-2 w-full',
      material: 'px-0 py-2 -mx-2 w-[calc(100%+32px)]',
    },
    inner: {
      common: 'w-full shrink-1 relative',
      ios: 'transition-all duration-300',
    },
    searchIconWrap: {
      common: 'absolute inset-y-0 flex items-center z-40',
      ios: 'start-2',
      material: 'start-4',
    },
    clearButton: {
      common:
        'absolute justify-center inset-y-0 flex items-center z-40 cursor-pointer end-0',
      ios: 'w-8 h-8',
      material: 'w-12 h-12',
    },
    input: {
      common: 'block appearance-none  w-full py-2  focus:outline-none z-30',
      ios: cls(
        'h-8 bg-black/10 pl-7 pr-7 rounded-lg text-base',
        darkClasses(
          'dark:placeholder-white dark:placeholder-opacity-30 dark:bg-white/10'
        ),
        colors.placeholderIos,
        colors.inputBgIos
      ),
      material: cls(
        'h-12 ps-12 pe-4 rounded-full',
        colors.placeholderMaterial,
        colors.inputBgMaterial
      ),
    },
    deleteIcon: {
      common: '',
      ios: 'w-3.5 h-3.5 opacity-45',
      material: 'w-6 h-6 active:opacity-20',
    },
    searchIcon: {
      common: '',
      ios: cls('w-4 h-4 opacity-45'),
      material: cls(
        'w-5 h-5 z-30',
        isEnabled
          ? 'opacity-0 transform rotate-90 scale-50 transition-transform-opacity  duration-400 '
          : 'block transform transition-transform-opacity scale-100 rotate-0 duration-400'
      ),
    },
    cancelButton: {
      ios: cls(
        'ps-2 flex items-center h-8 cursor-pointer bg-transparent text-primary shrink-0 z-40 transition-all duration-300 active:opacity-30',
        isEnabled ? '' : 'opacity-0'
      ),
      material: cls(
        'absolute left-4 cursor-pointer',
        isEnabled
          ? 'z-40 transform scale-100 rotate-0 transition-transform-opacity  duration-400'
          : 'opacity-0 transform -rotate-90 scale-50 transition-transform-opacity duration-400'
      ),
    },
  };
};
