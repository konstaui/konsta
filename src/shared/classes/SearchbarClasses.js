import { cls } from '../cls.js';

export const SearchbarClasses = (props, colors, { isFocused, darkClasses }) => {
  return {
    root: {
      ios: cls(isFocused ? colors.activeBgIos : colors.bgIos),
    },
    base: {
      common: 'relative w-full flex overflow-hidden box-border items-center',
      ios: 'px-2 py-2',
      material: 'px-3 py-2',
    },
    inputWrap: {
      common: 'relative',
      ios: '-mt-1',
      material: '-mt-0.5',
    },
    inner: {
      common: 'w-full shrink-1',
      ios: cls(
        isFocused
          ? 'mr-18 w-full transition-all duration-300'
          : 'w-full transition-all duration-300 shrink-1'
      ),
    },
    iconSearch: {
      common: 'absolute inset-y-0 left-2 flex items-center pl-2 z-40',
    },
    iconDelete: {
      common: 'absolute inset-y-0 right-2 flex items-center pr-4 z-40',
    },
    input: {
      common: 'block appearance-none  w-full py-2  focus:outline-none z-30',
      ios: cls(
        'h-8 bg-borderbg pl-7 pr-7 rounded-lg text-base',
        darkClasses('dark:placeholder-white dark:placeholder-opacity-30')
      ),
      material:
        'h-10 placeholder-textColorM pl-14 pr-4 bg-searchbgM rounded-full',
    },
    clearButton: {
      common:
        'absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer',
      ios: 'w-3.5 h-3.5 opacity-45',
      material: 'w-6 h-6',
    },
    searchIcon: {
      common: '',
      ios: cls('w-4 h-4 opacity-45 -ml-2', colors.labelTextIos),
      material: cls(
        'w-6 h-6 z-30',
        isFocused
          ? 'opacity-0 transform rotate-90 scale-50 transition-transform-opacity  duration-400 '
          : 'block transform transition-transform-opacity scale-100 rotate-0 duration-400'
      ),
    },
    cancelButton: {
      ios: cls(
        'px-2 py-1 cursor-pointer  absolute top-1/2 -translate-y-1/2 bg-transparent rounded-lg text-brand-blue',
        isFocused
          ? 'z-40 transform transition-transform-opacity end-0 duration-300'
          : 'translate-x-full opacity-0'
      ),
      material: cls(
        'absolute left-8 cursor-pointer',
        isFocused
          ? 'z-40 transform scale-100 rotate-0 transition-transform-opacity  duration-400'
          : 'opacity-0 transform -rotate-90 scale-50 transition-transform-opacity duration-400'
      ),
    },
    border: {
      common:
        'pointer-events-none absolute left-0 bottom-0 duration-200 w-full',
      ios: cls(
        isFocused ? colors.outlineBorderFocusIos : colors.outlineBorderIos,
        'h-full border rounded-lg -z-10'
      ),
      material: cls(
        isFocused
          ? colors.outlineBorderFocusMaterial
          : colors.outlineBorderMaterial,
        'h-full border rounded -z-10',
        isFocused && 'border-2'
      ),
    },
  };
};
