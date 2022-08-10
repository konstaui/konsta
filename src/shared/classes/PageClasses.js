import { cls } from '../cls.js';
import { positionClass } from '../position-class.js';

export const PageClasses = (props, colors, classes) => {
  return {
    base: {
      common: cls(
        'h-full w-full left-0 top-0 overflow-auto',
        positionClass('absolute', classes)
      ),
      ios: colors.bgIos,
      material: colors.bgMaterial,
    },
  };
};
