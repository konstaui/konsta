import { cls } from '../cls.js';

export const MessagebarClasses = (props, colors) => {
  const {
    rightClassName = '',
    rightClass = '',
    leftClassName = '',
    leftClass,
  } = props;
  return {
    base: {
      common: 'fixed bottom-0 start-0 w-full',
      ios: cls('pb-safe'),
      material: cls('pt-1 pb-1-safe'),
    },
    toolbar: {
      material: colors.bgMessage,
    },
    left: {
      common: cls('mt-1 -ms-2', leftClassName || leftClass),
      ios: cls('px-2', colors.toolbarIcon),
      material: cls('', colors.toolbarIcon),
    },
    right: {
      common: cls('mt-1 -me-2', rightClassName || rightClass),
      ios: cls('px-2', colors.toolbarIcon),
    },
    messagebarArea: {
      common: 'w-full',
    },
    messagebarInput: {
      common: 'block w-full focus:outline-none resize-none',
      ios: cls(
        'border h-8 rounded-3xl px-4 leading-4 py-1.5',
        colors.inputBgIos,
        colors.borderIos,
        colors.placeholderIos
      ),
      material: cls(
        'rounded-3xl h-12 px-4 py-4 leading-4 ',
        colors.inputBgMd,
        colors.placeholderMd
      ),
    },
  };
};
