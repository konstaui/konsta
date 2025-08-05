import { cls } from '../cls.js';

export const ToolbarClasses = (props, colors, baseClassName) => {
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
      common: cls(`k-toolbar w-full z-20 relative`, baseClassName),
      ios: cls(!top && 'pb-safe-4', 'px-safe-4 flex justify-center'),
      material: cls(!top && 'pb-safe'),
    },
    bgBlur: {
      ios:
        !top &&
        cls(
          cls(
            tabbarIcons && tabbarLabels
              ? 'h-[calc(var(--k-safe-area-bottom)_+16px_+_64px_+_16px)]'
              : 'h-[calc(var(--k-safe-area-bottom)_+16px_+_48px_+_16px)]'
          ),
          'backdrop-blur-[2px] absolute left-0 bottom-0 w-full mask-t-from-50% mask-t-to-100% pointer-events-none'
        ),
    },
    bg: {
      common: cls(bgClassName || bgClass),
      ios:
        !top &&
        cls(
          colors.bgIos,
          'bottom-0 absolute w-full left-0 pointer-events-none',
          tabbarIcons && tabbarLabels
            ? 'h-[calc(var(--k-safe-area-bottom)_+16px_+_64px_+_16px)]'
            : 'h-[calc(var(--k-safe-area-bottom)_+16px_+_48px_+_16px)]'
        ),
      material: cls(
        colors.bgMaterial,
        'h-full top-0 absolute w-full left-0',
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
