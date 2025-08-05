import { cls } from '../cls.js';

export const ListButtonClasses = (props, colors, baseClassName) => {
  const { dividers } = props;
  return {
    base: ``,
    button: {
      common: cls(
        'k-list-button',
        dividers && 'hairline-b active:hairline-transparent',
        `flex relative items-center justify-center px-4 gap-1 w-full duration-300 active:duration-0 focus:outline-none ${colors.touchRipple} overflow-hidden select-none`,
        baseClassName
      ),
      ios: cls('h-13 text-[17px]', colors.textIos, colors.bgIos),
      material: cls('h-12', colors.textMaterial, colors.bgMaterial),
    },
  };
};
