import { cls } from '../cls.js';

export const ListInputClasses = (
  props,
  colors,
  { isFloatingTransformed, isFocused, darkClasses, getLabelColor, hasLabel },
  baseClassName
) => {
  const { error, type, outline, inputClassName = '', inputClass = '' } = props;
  return {
    base: {
      common: cls('k-list-input', baseClassName),
      ios: cls(outline && 'my-4'),
      material: cls('py-2'),
    },
    itemContent: {
      common: 'relative',
      ios: cls(outline && 'ml-4 mr-4 rounded-lg', !outline && colors.bgIos),
      material: cls(
        'min-h-[56px] ml-4 mr-4',
        outline ? cls('rounded') : cls(colors.bgMaterial, 'rounded-t relative ')
      ),
    },
    inner: {
      common: '',
      material: cls(!outline ? 'pt-2 pb-2' : 'pt-4 pb-4'),
      stacked: '',
      floating: '',
    },
    label: {
      common: cls(`duration-200 text-xs`, getLabelColor(), outline && 'flex'),
      ios: cls(outline && '-mt-4'),
      material: cls(outline && '-mt-4'),
      stacked: '',
      floating: {
        common: cls(
          `pointer-events-none duration-200 transform origin-left rtl:origin-right max-w-[66%]`,
          isFloatingTransformed && 'scale-133'
        ),
        ios: isFloatingTransformed
          ? outline
            ? 'translate-y-6'
            : 'translate-y-4'
          : '',
        material: isFloatingTransformed
          ? outline
            ? 'translate-y-8'
            : 'translate-y-3'
          : '',
      },
    },
    labelText: {
      common: cls(outline && 'relative p-1 block -m-1'),
      ios: cls(outline && cls('-top-1', colors.outlineLabelBgIos)),
      material: cls(outline && cls('-top-2', colors.outlineLabelBgMaterial)),
    },
    inputWrap: {
      common: 'relative',
      ios: cls((!hasLabel || outline) && '-mt-2.5', '-mb-2.5'),
      stacked: '',
      floating: '',
    },
    media: {
      material: '',
    },
    titleWrap: {
      material: `duration-200 ${getLabelColor()}`,
    },
    input: {
      common: `block text-base appearance-none w-full focus:outline-none bg-transparent ${
        inputClassName || inputClass
      }`,
      ios: 'h-10',
      material: 'h-6',
      notFloating: {
        common: cls(
          'placeholder-black/30',
          darkClasses('dark:placeholder-white/30')
        ),
        material: cls(type === 'textarea' && 'py-1'),
        ios: cls(type === 'textarea' && 'py-2'),
      },

      floating: isFloatingTransformed
        ? 'placeholder-transparent'
        : cls(`placeholder-black/30`, darkClasses('dark:placeholder-white/30')),
    },
    errorInfo: {
      common: 'text-xs relative z-10',
      ios: 'mt-1',
      material: '',
    },
    error: colors.errorText,
    info: 'opacity-50',
    clearButton: {
      common:
        'absolute end-0 top-1/2 transform -translate-y-1/2 cursor-pointer',
      ios: cls('w-3.5 h-3.5 opacity-45 active:opacity-30', colors.labelTextIos),
      material: cls('w-6 h-6 active:opacity-55', colors.labelTextMaterial),
    },
    dropdown:
      'absolute end-0 top-1/2 transform -translate-y-1/2 pointer-events-none opacity-50',
    border: {
      common:
        'pointer-events-none absolute start-0 bottom-0 duration-200 w-full',
      ios:
        outline &&
        cls(
          error
            ? colors.errorBorder
            : isFocused
              ? colors.outlineBorderFocusIos
              : colors.outlineBorderIos,
          'h-full border rounded-lg -z-10'
        ),
      material: cls(
        error
          ? colors.errorBorder
          : isFocused
            ? colors.outlineBorderFocusMaterial
            : colors.outlineBorderMaterial,
        outline && cls('h-full border rounded -z-10', isFocused && 'border-2'),
        !outline &&
          cls('border-b h-px origin-bottom', isFocused && 'scale-y-[2]')
      ),
    },
  };
};
