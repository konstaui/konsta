import { cls } from '../cls.js';

export const NavbarClasses = (props, colors, baseClassName) => {
  const {
    outline,
    large,
    medium,
    transparent,
    left,
    right,
    subnavbar,
    fontSizeIos,
    fontSizeMaterial,
    titleFontSizeIos,
    titleFontSizeMaterial,
    titleLargeFontSizeIos,
    titleLargeFontSizeMaterial,
    titleMediumFontSizeIos,
    titleMediumFontSizeMaterial,
    bgClassName = '',
    bgClass = '',
    subnavbarClassName = '',
    subnavbarClass = '',
    innerClassName = '',
    innerClass = '',
    leftClassName = '',
    leftClass = '',
    titleClassName = '',
    titleClass = '',
    subtitleClassName = '',
    subtitleClass = '',
    rightClassName = '',
    rightClass = '',
    centerTitle,
  } = props;
  return {
    base: {
      common: cls(
        `k-navbar w-full z-20 top-0 sticky`,
        (large || medium) && 'pointer-events-none',
        baseClassName
      ),
      ios: cls(
        'pt-[max(16px,var(--k-safe-area-top))]',
        fontSizeIos,
        colors.textIos
      ),
      material: cls('pt-safe', fontSizeMaterial, colors.textMaterial),
    },
    bgBlur: {
      ios: cls(
        'backdrop-blur-[2px] absolute left-0 top-0 w-full  mask-b-to-100% pointer-events-none mask-b-from-50%',
        subnavbar
          ? 'h-[calc(max(16px,var(--k-safe-area-top))_+_44px_+70px_+_16px)]'
          : 'h-[calc(max(16px,var(--k-safe-area-top))_+_44px_+_16px)]'
      ),
    },
    bg: {
      common: cls('absolute w-full left-0 top-0', bgClassName || bgClass),
      ios: cls(
        colors.bgIos,
        'pointer-events-none',
        subnavbar
          ? 'h-[calc(max(16px,var(--k-safe-area-top))_+_44px_+70px_+_16px)]'
          : 'h-[calc(max(16px,var(--k-safe-area-top))_+_44px_+_16px)]'
      ),
      material: cls('h-full', colors.bgMaterial, outline && 'hairline-b'),
    },
    subnavbar: {
      common: cls(
        'relative flex items-center',
        subnavbarClassName || subnavbarClass,
        (large || medium) && 'pointer-events-auto'
      ),
      ios: 'h-14 pl-safe-4 pr-safe-4',
      material: 'h-14 pl-safe-4 pr-safe-4',
    },
    inner: {
      common: cls(
        'flex relative items-center w-full',
        innerClassName || innerClass,
        (large || medium) && 'pointer-events-auto z-10'
      ),
      ios: cls(
        'pl-safe-4 pr-safe-4 h-11',
        !left && right ? 'justify-end' : 'justify-between'
      ),
      material: 'justify-start h-16 pl-safe pr-safe overflow-hidden',
    },
    titleContainer: {
      common: cls(
        'flex items-center px-safe-4 relative',
        (large || medium) && 'pointer-events-auto'
      ),
      ios: cls(
        medium && cls(titleMediumFontSizeIos, 'h-11 font-semibold'),
        large && cls(titleLargeFontSizeIos, 'h-13 font-bold')
      ),
      material: cls(
        medium && cls(titleMediumFontSizeMaterial, 'h-12 pb-4'),
        large && cls(titleLargeFontSizeMaterial, 'h-[5.5rem]')
      ),
    },
    left: {
      common: cls(
        'flex justify-center items-center h-full',
        leftClassName || leftClass
      ),
      ios: 'me-2 transform transform-gpu rounded-full',
      material: 'mx-1',
    },
    title: {
      common: cls(
        `whitespace-nowrap leading-tight`,
        titleClassName || titleClass,
        (large || medium || transparent) && 'opacity-0',
        centerTitle
          ? `absolute top-1/2 left-1/2 transform-gpu -translate-x-1/2 -translate-y-1/2 text-center`
          : 'text-start'
      ),
      ios: cls(
        `${titleFontSizeIos} font-semibold`,
        !centerTitle && 'first:mx-2'
      ),
      material: cls(
        `${titleFontSizeMaterial} font-normal`,

        !centerTitle && 'first:mx-4'
      ),
    },
    subtitle: {
      common: cls('leading-none', subtitleClassName || subtitleClass),
      ios: 'text-sm opacity-75 font-medium',
      material: 'text-sm opacity-85 font-normal',
    },
    right: {
      common: cls(
        'flex justify-center items-center h-full',
        rightClassName || rightClass
      ),
      ios: cls(
        'transform transform-gpu rounded-full',
        centerTitle ? 'ms-2' : 'ms-auto'
      ),
      material: 'ms-auto me-1',
    },
  };
};
