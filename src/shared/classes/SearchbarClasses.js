import { cls } from '../cls.js';

export const SearchbarClasses = (props, colors, { isFocused }) => {
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
      ios: 'h-8 bg-borderbg pl-9 pr-3 rounded-lg text-base',
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
      ios: cls('w-5 h-5 opacity-45', colors.labelTextIos),
      material: cls(
        'w-6 h-6 transition-all duration-300',
        isFocused ? 'hidden' : 'block'
      ),
    },
    cancelButton: {
      ios: cls(
        'px-2 py-1 cursor-pointer z-40 absolute top-1/2 -translate-y-1/2 right-2 bg-transparent rounded-lg text-brand-blue',
        isFocused
          ? 'block transform translate-x-0 transition-all duration-300 ease-in-out'
          : 'hidden transition-all duration-300 ease-in-out transform translate-x-full'
      ),
      material: cls(
        'absolute left-8 transition-all duration-300 ease-in-out cursor-pointer',
        isFocused
          ? 'block  scale-100 rotate-0'
          : 'hidden -rotate-90deg scale-50'
      ),

      // ios: 'bg-transparent rounded-lg text-brand-blue',
      // material: 'bg-transparent rounded text-links',
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
