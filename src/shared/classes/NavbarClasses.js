import { cls } from '../cls.js';
import { positionClass } from '../position-class.js';

export const NavbarClasses = (props, colors, classes) => {
  const {
    outline,
    translucent,
    large,
    medium,
    transparent,
    left,
    right,
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
        `w-full z-20 top-0 pt-safe`,
        positionClass('sticky', classes)
      ),
      ios: cls(fontSizeIos, colors.textIos),
      material: cls(fontSizeMaterial, colors.textMaterial),
    },
    bg: {
      common: cls(
        'absolute w-full h-full left-0 top-0',
        outline && 'hairline-b',
        bgClassName || bgClass
      ),
      ios: cls(colors.bgIos, translucent && 'translucent'),
      material: `${colors.bgMaterial}`,
    },
    subnavbar: {
      common: cls(
        'relative flex items-center',
        subnavbarClassName || subnavbarClass
      ),
      ios: 'h-11 pl-2-safe pr-2-safe',
      material: 'h-14 pl-4-safe pr-4-safe',
    },
    inner: {
      common: cls(
        'flex relative items-center w-full overflow-hidden',
        innerClassName || innerClass
      ),
      ios: cls(
        'pl-2-safe pr-2-safe h-11',
        !left && right ? 'justify-end' : 'justify-between'
      ),
      material: 'justify-start h-16 pl-safe pr-safe',
    },
    titleContainer: {
      common: 'flex items-center px-4 relative',
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
      ios: 'mr-2 transform transform-gpu',
      material: 'mx-1',
    },
    title: {
      common: cls(
        `whitespace-nowrap leading-tight`,
        titleClassName || titleClass,
        (large || medium || transparent) && 'opacity-0',
        centerTitle
          ? `absolute top-1/2 left-1/2 transform-gpu -translate-x-1/2 -translate-y-1/2 text-center`
          : 'text-left'
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
      common: cls(
        'font-normal leading-none',
        subtitleClassName || subtitleClass
      ),
      ios: 'text-2xs opacity-55',
      material: 'text-sm opacity-85',
    },
    right: {
      common: cls(
        'flex justify-center items-center h-full',
        rightClassName || rightClass
      ),
      ios: cls('transform transform-gpu', centerTitle ? 'ml-2' : 'ml-auto'),
      material: 'ml-auto mr-1',
    },
  };
};
