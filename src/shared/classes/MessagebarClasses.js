import { cls } from '../cls.js';

export const MessagebarClasses = (
  props,
  colors,
  { darkClasses }
) => {
  return {
    base: {
      common: '',
      ios: cls(''),
      material: cls('py-2'),
    },
    toolbar: {
      material: colors.bgMessage,
    },
    messagebarLeft: {
      common: 'mt-1',
      ios: cls('px-3', colors.toolbarIcon),
      material: cls('', colors.toolbarIcon),
    },
    messagebarRight: {
      common: 'mt-1',
      ios: cls('px-3 ', colors.toolbarIcon),
    },
    messagebarArea: {
      common: 'w-full',
    },
    messagebarInput: {
      common: 'block w-full focus:outline-none  focus:outline-none',
      ios: cls('border h-8.5 rounded-full bg-transparent px-4 py-1.5'),
      material: cls(
        'rounded-full h-12 px-4 py-1.5',
        colors.inputBgMd,
        colors.placeholderMd
      ),
    },
  };
};
