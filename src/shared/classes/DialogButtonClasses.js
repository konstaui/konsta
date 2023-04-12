import { cls } from '../cls.js';

export const DialogButtonClasses = (props, colors) => {
  const { strong, disabled } = props;
  return {
    base: {
      ios: cls(
        'text-center text-[17px] flex items-center justify-center h-11 w-full hairline-r rtl:hairline-l relative first:rounded-bl-xl last:rounded-br-xl rtl:first:rounded-br-xl rtl:first:rounded-bl-none rtl:last:rounded-bl-xl rtl:last:rounded-br-none',
        disabled ? colors.disabledTextIos : colors.textIos,
        strong && 'font-semibold',
        !disabled && colors.activeBgIos
      ),
    },
  };
};
