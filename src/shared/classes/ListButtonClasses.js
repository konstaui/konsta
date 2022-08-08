import { cls } from '../cls.js';
import { positionClass } from '../position-class.js';

export const ListButtonClasses = (props, colors, classes, theme) => {
  const { hairlines } = props;
  return {
    base: ``,
    button: {
      common: cls(
        positionClass('relative', classes),
        hairlines && 'hairline-b active:hairline-transparent',
        `flex items-center justify-center px-4 space-x-1 w-full duration-300 active:duration-0 focus:outline-none ${colors.text} ${colors.touchRipple} overflow-hidden select-none`,
        theme === 'ios' && `${colors.activeBg} active:bg-opacity-15`
      ),
      ios: 'h-11',
      material: 'h-12',
    },
  };
};
