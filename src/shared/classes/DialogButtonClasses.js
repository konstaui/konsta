import { cls } from '../cls.js';

export const DialogButtonClasses = (props, colors) => {
  const { strong, disabled } = props;
  return {
    base: {
      ios: cls(
        'text-center text-[17px] flex items-center justify-center h-11 w-full hairline-r relative first:rounded-bl-xl last:rounded-br-xl',
        disabled ? colors.disabledTextIos : colors.textIos,
        strong && 'font-semibold',
        !disabled && colors.activeBgIos
      ),
    },
  };
};
