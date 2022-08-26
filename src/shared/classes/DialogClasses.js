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
        'left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 max-w-full max-h-full overflow-hidden duration-400',
        positionClass('fixed', classes)
      ),
      ios: cls(
        'rounded-xl',
        sizeIos,
        colors.bgIos,
        translucent && 'translucent'
      ),
      material: cls('rounded-[1.75rem] p-6', sizeMaterial, colors.bgMaterial),
      opened: '',
      closed: 'scale-[0.85] opacity-0 pointer-events-none',
    },
    contentWrap: {
      common: 'flex flex-col items-center justify-center',
      material: 'space-y-3',
      ios: cls('p-4 space-y-1 relative', hasButtons && 'hairline-b'),
    },
    title: {
      common: cls(''),
      ios: cls(colors.titleIos, titleFontSizeIos, 'font-semibold text-center'),
      material: cls(colors.titleMaterial, titleFontSizeMaterial, 'w-full'),
    },
    content: {
      common: cls('text-sm'),
      ios: cls(colors.contentIos, 'text-center'),
      material: cls(colors.contentMaterial),
    },
    buttons: {
      common: 'flex items-center',
      ios: cls('justify-center last-child-hairline-r-none'),
      material: cls('justify-end pt-6 space-x-2'),
    },
    backdrop: {
      common:
        'fixed z-40 w-full h-full left-0 top-0 bg-black bg-opacity-50 duration-400',
      opened: '',
      closed: 'opacity-0 pointer-events-none',
    },
  };
};
