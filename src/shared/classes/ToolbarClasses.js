import { cls } from '../cls.js';

export const ToolbarClasses = (props, colors) => {
  const {
    bgClassName = '',
    bgClass = '',
    outline,
    innerClassName = '',
    innerClass = '',
    tabbar,
    tabbarIcons,
    tabbarLabels,
    top,
  } = props;
  return {
    base: {
      common: cls(`w-full z-20 relative`),
      ios: cls(!top && 'pb-safe-4', 'px-safe-4 flex justify-center'),
      material: cls(!top && 'pb-safe'),
    },
    bg: {
      common: cls(
        'absolute w-full h-full left-0 top-0',
        bgClassName || bgClass
      ),
      ios: cls(''),
      material: cls(
        `${colors.bgMaterial}`,
        outline && (top ? 'hairline-b' : 'hairline-t')
      ),
    },
    inner: {
      common: cls(
        `flex relative justify-between`,
        innerClassName || innerClass
      ),
      ios: cls(
        'gap-4 items-stretch',
        tabbarIcons && tabbarLabels ? 'h-16' : 'h-12',
        tabbar ? 'w-full md:w-auto' : 'w-auto'
      ),
      material: cls(
        'w-full overflow-hidden items-center',
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
