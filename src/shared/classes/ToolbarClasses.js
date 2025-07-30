import { cls } from '../cls.js';

export const ToolbarClasses = (props, colors) => {
  const {
    bgClassName = '',
    bgClass = '',
    outline,
    translucent,
    innerClassName = '',
    innerClass = '',
    tabbar,
    tabbarIcons,
    top,
  } = props;
  return {
    base: {
      common: cls(`w-full z-20 relative`, !top && 'pb-safe'),
    },
    bg: {
      common: cls(
        'absolute w-full h-full left-0 top-0',
        outline && (top ? 'hairline-b' : 'hairline-t'),
        bgClassName || bgClass
      ),
      ios: cls(colors.bgIos, translucent && 'translucent'),
      material: cls(`${colors.bgMaterial}`),
    },
    inner: {
      common: cls(
        `flex relative justify-between items-center w-full overflow-hidden`,
        innerClassName || innerClass
      ),
      ios: cls('pl-safe-2 pr-safe-2', tabbarIcons ? 'h-12.5' : 'h-11'),
      material: cls(
        !tabbar ? 'pl-safe-2 pr-safe-2' : '',
        tabbarIcons ? 'h-20' : 'h-14'
      ),
    },
    highlight: {
      common: cls(
        top ? 'bottom-0' : 'top-0',
        'absolute left-0 w-full h-0.5 duration-200 pointer-events-none transition-transform'
      ),
      ios: colors.tabbarHighlightBgIos,
      material: colors.tabbarHighlightBgMaterial,
    },
  };
};
