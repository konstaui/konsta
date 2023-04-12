import { cls } from '../cls.js';
import { positionClass } from '../position-class.js';

export const DialogClasses = (props, colors, classes, { hasButtons }) => {
  const {
    titleFontSizeMaterial,
    titleFontSizeIos,
    translucent,
    sizeIos,
    sizeMaterial,
  } = props;
  return {
    base: {
      common: cls(
        'left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 max-h-full overflow-hidden duration-400',
        positionClass('fixed', classes)
      ),
      ios: cls(
        'rounded-xl max-w-full',
        sizeIos,
        colors.bgIos,
        translucent && 'translucent'
      ),
      material: cls(
        'rounded-[1.75rem] p-6 max-w-[90%]',
        sizeMaterial,
        colors.bgMaterial
      ),
      opened: '',
      closed: 'scale-[0.85] opacity-0 pointer-events-none',
    },
    contentWrap: {
      common: 'flex flex-col items-center justify-center',
      material: 'space-y-3',
      ios: cls('p-4 space-y-1 relative', hasButtons && 'hairline-b'),
    },
    title: {
      common: cls('w-full'),
      ios: cls(colors.titleIos, titleFontSizeIos, 'font-semibold text-center'),
      material: cls(colors.titleMaterial, titleFontSizeMaterial),
    },
    content: {
      common: cls('text-sm w-full'),
      ios: cls(colors.contentTextIos, 'text-center'),
      material: cls(colors.contentTextMaterial),
    },
    buttons: {
      common: 'flex items-center',
      ios: cls('justify-center last-child-hairline-r-none'),
      material: cls('justify-end pt-6 space-x-2 rtl:space-x-reverse'),
    },
    backdrop: {
      common:
        'fixed z-40 w-full h-full left-0 top-0 bg-black bg-opacity-50 duration-400',
      opened: '',
      closed: 'opacity-0 pointer-events-none',
    },
  };
};
