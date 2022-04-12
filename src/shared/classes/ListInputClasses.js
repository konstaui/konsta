import { cls } from '../cls.js';

export const ListInputClasses = (
  props,
  colors,
  {
    isFloatingTransformed,
    isFocused,
    darkClasses,
    getLabelColor,
    getHairlineColor,
  }
) => {
  const {
    hairlines,
    error,
    type,
    inputClassName = '',
    inputClass = '',
  } = props;
  return {
    base: ``,
    itemContent: '',
    inner: {
      common: '',
      material: 'hairline-b-none',
      inline: {
        common: 'flex items-center',
      },
      stacked: '',
      floating: 'overflow-hidden',
    },
    label: {
      common: `text-xs ${getLabelColor()}`,
      inline: {
        material: 'duration-200',
      },
      stacked: {
        common: 'duration-200',
        material: '-mt-1',
      },
      floating: {
        common: cls(
          `pointer-events-none duration-200 transform origin-left`,
          isFloatingTransformed && 'scale-133'
        ),
        ios: isFloatingTransformed ? 'translate-y-7.5' : '',
        material: `-mt-1 ${isFloatingTransformed ? 'translate-y-5' : ''}`,
      },
    },
    inputWrap: {
      common: 'relative',
      ios: '-mb-2.5',
      material: hairlines
        ? `hairline-b hairline-duration-200 ${getHairlineColor()} ${
            isFocused || error ? 'hairline-b-scale' : ''
          }`
        : '',
      inline: {
        common: `shrink-10 w-full`,
        ios: '-mt-2.5',
        material: `-my-1`,
      },
      stacked: {
        material: '-mb-1',
      },
      floating: {
        material: '-mb-1',
      },
    },
    media: {
      inline: '',
      notInline: {
        material: 'self-end',
      },
    },
    titleWrap: {
      material: `duration-200 ${getLabelColor(true)}`,
      inline: `w-4/12 shrink-0 mr-2`,
      notInline: '',
    },
    input: {
      common: `block text-base appearance-none w-full focus:outline-none bg-transparent ${
        inputClassName || inputClass
      }`,
      ios: 'h-11',
      material: 'h-9',
      notFloating: cls(
        'placeholder-black placeholder-opacity-30',
        darkClasses('dark:placeholder-white dark:placeholder-opacity-30'),
        type === 'textarea' && 'py-3'
      ),

      floating: isFloatingTransformed
        ? 'placeholder-transparent'
        : cls(
            `placeholder-black placeholder-opacity-30`,
            darkClasses('dark:placeholder-white dark:placeholder-opacity-30')
          ),
    },
    errorInfo: {
      common: 'text-xs relative z-10',
      inline: 'mb-2',
      notInline: {
        ios: 'mt-1',
        material: 'mt-2',
      },
    },
    error: colors.errorText,
    info: 'opacity-50',
    clearButton: {
      common:
        'absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer opacity-45 active:opacity-30',
      ios: 'w-3.5 h-3.5',
      material: 'w-4.5 h-4.5',
    },
    dropdown:
      'absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none opacity-50',
  };
};
