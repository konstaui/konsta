import { cls } from '../cls.js';
import { positionClass } from '../position-class.js';

export const ListButtonClasses = (props, colors, classes) => {
  const { hairlines } = props;
  return {
    base: ``,
    button: {
      common: cls(
        positionClass('relative', classes),
        hairlines && 'hairline-b active:hairline-transparent',
        `flex items-center justify-center px-4 space-x-1 active:bg-opacity-15 w-full duration-300 active:duration-0 focus:outline-none ${colors.text} ${colors.activeBg} ${colors.touchRipple} overflow-hidden select-none`
      ),
      ios: 'h-11',
      material: 'h-12',
    },
  };
};
