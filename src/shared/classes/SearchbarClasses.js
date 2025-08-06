import { cls } from '../cls.js';

export const SearchbarClasses = (props, colors, { isEnabled, darkClasses }) => {
  return {
    base: {
      common: 'k-searchbar relative flex items-center',
      ios: 'w-full',
      material: 'px-0 py-2 -mx-2 w-[calc(100%+32px)] overflow-hidden ',
    },
    inner: {
      common: 'w-full shrink-1 relative',
      ios: 'transition-all duration-300 rounded-full',
    },
    searchIconWrap: {
      common: 'absolute inset-y-0 flex items-center z-40',
      ios: 'start-4',
      material: 'start-4',
    },
    clearButton: {
      common:
        'absolute justify-center top-1/2 -translate-y-1/2 flex items-center z-40 cursor-pointer active:opacity-30',
      ios: 'w-8 h-8 end-2',
      material: 'w-12 h-12 end-0',
    },
    input: {
      common: 'block appearance-none w-full py-2  focus:outline-none z-30',
      ios: cls(
        'h-11 pl-10.5 pr-9 text-[17px]',
        darkClasses('dark:placeholder-white/30'),
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
          ? 'opacity-0 transform rotate-90 scale-50 transition-(--transition-transform-opacity)  duration-400 '
          : 'block transform transition-(--transition-transform-opacity) scale-100 rotate-0 duration-400'
      ),
    },
    cancelButton: {
      ios: cls(
        'flex justify-center items-center h-11 w-11 cursor-pointer shrink-0 z-40 transition-all duration-300 rounded-full',
        isEnabled ? '' : 'scale-0'
      ),
      material: cls(
        'absolute left-4 cursor-pointer',
        isEnabled
          ? 'z-40 transform scale-100 rotate-0 transition-(--transition-transform-opacity)  duration-400'
          : 'opacity-0 transform -rotate-90 scale-50 transition-(--transition-transform-opacity) duration-400'
      ),
    },
  };
};
