import { cls } from '../cls.js';

export const DialogClasses = (props, colors, baseClassName) => {
  const { titleFontSizeMaterial, titleFontSizeIos, sizeIos, sizeMaterial } =
    props;
  return {
    base: {
      common: cls(
        'k-dialog left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 max-h-full overflow-hidden duration-400 fixed',
        baseClassName
      ),
      ios: cls('rounded-4xl max-w-full w-75', colors.bgIos),
      material: cls(
        'rounded-[1.75rem] p-6 max-w-[90%] w-78',
        sizeMaterial,
        colors.bgMaterial
      ),
      opened: '',
      closed: 'scale-[0.85] opacity-0 pointer-events-none',
    },
    contentWrap: {
      common: 'flex flex-col items-center justify-center',
      material: 'gap-3',
      ios: cls('p-6 gap-3 relative'),
    },
    title: {
      common: cls('w-full'),
      ios: cls(colors.titleIos, titleFontSizeIos, 'font-semibold'),
      material: cls(colors.titleMaterial, titleFontSizeMaterial),
    },
    content: {
      common: cls('text-sm w-full'),
      ios: cls(colors.contentTextIos),
      material: cls(colors.contentTextMaterial),
    },
    buttons: {
      common: 'flex items-center',
      ios: cls('justify-center p-3.5 pt-0 gap-2'),
      material: cls('justify-end pt-6 gap-2'),
    },
    backdrop: {
      common: 'fixed z-40 w-full h-full left-0 top-0 bg-black/50 duration-400',
      opened: '',
      closed: 'opacity-0 pointer-events-none',
    },
  };
};
