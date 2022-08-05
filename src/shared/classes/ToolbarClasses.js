import { cls } from '../cls.js';
import { positionClass } from '../position-class.js';

export const ToolbarClasses = (props, colors, classes) => {
  const {
    bgClassName = '',
    bgClass = '',
    hairlines,
    translucent,
    innerClassName = '',
    innerClass = '',
    tabbar,
    top,
  } = props;
  return {
    base: {
      common: cls(
        `w-full z-20`,
        positionClass('relative', classes),
        !top && 'pb-safe'
      ),
    },
    bg: {
      common: cls(
        'absolute w-full h-full left-0 top-0',
        bgClassName || bgClass
      ),
      ios: cls(
        hairlines && (top ? 'hairline-b' : 'hairline-t'),
        colors.bgIos,
        translucent && 'translucent'
      ),
      material: cls(`${colors.bgMaterial}`, !top && 'transform rotate-180'),
    },
    inner: {
      common: cls(
        `flex relative justify-between items-center w-full overflow-hidden`,
        innerClassName || innerClass
      ),
      ios: 'pl-2-safe pr-2-safe',
      material: !tabbar ? 'pl-2-safe pr-2-safe' : '',
      toolbar: {
        ios: 'h-11',
        material: tabbar ? 'h-20' : 'h-16',
      },
      tabbarLabels: {
        ios: 'h-12.5',
        material: 'h-20',
      },
    },
  };
};
