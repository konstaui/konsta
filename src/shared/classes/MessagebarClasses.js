import { cls } from '../cls.js';

export const MessagebarClasses = (
  props,
  colors,
  { isFocused },
  baseClassName
) => {
  const {
    rightClassName = '',
    rightClass = '',
    leftClassName = '',
    leftClass = '',
  } = props;
  return {
    base: {
      common: cls('k-messagebar fixed bottom-0 start-0 w-full', baseClassName),
    },
    toolbar: {
      material: colors.bgMessage,
    },
    toolbarInner: {
      ios: 'w-full items-center gap-3',
    },
    left: {
      common: cls('', leftClassName || leftClass),
      ios: cls('', colors.toolbarIconIos),
      material: cls('mt-1 -ms-2', colors.toolbarIconMd),
    },
    right: {
      common: cls('', rightClassName || rightClass),
      ios: cls('', colors.toolbarIconIos),
      material: cls('mt-1 -me-2'),
    },
    messagebarArea: {
      common: 'w-full',
      ios: 'rounded-3xl self-center',
    },
    messagebarInput: {
      common: cls(
        'block w-full focus:outline-none resize-none',
        isFocused && 'outline-offset-0'
      ),
      ios: cls(
        'border-transparent h-10 px-4 leading-4 pt-3 pb-1 rounded-3xl touch-none',
        colors.inputBgIos,
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
