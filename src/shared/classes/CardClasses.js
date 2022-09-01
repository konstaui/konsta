import { cls } from '../cls.js';

export const CardClasses = (props, colors) => {
  const { margin, headerDivider, footerDivider, contentWrapPadding } = props;
  return {
    base: {
      common: cls(margin, `overflow-hidden`),
      ios: cls('rounded-lg', colors.bgIos, colors.textIos),
      material: cls('rounded-2xl', colors.bgMaterial, colors.textMaterial),
      plain: '',
      raised: 'shadow',
      outline: {
        common: cls(`border`),
        ios: colors.outlineIos,
        material: colors.outlineMaterial,
      },
    },
    header: {
      common: cls(headerDivider && `border-b`, `p-4`),
      ios: cls(headerDivider && colors.outlineIos, props.headerFontSizeIos),
      material: cls(
        headerDivider && colors.outlineMaterial,
        props.headerFontSizeMaterial
      ),
    },
    content: cls(contentWrapPadding, 'text-sm'),
    footer: {
      common: cls(headerDivider && `border-t`, `text-sm p-4`),
      ios: cls(colors.footerTextIos, footerDivider && colors.outlineIos),
      material: cls(
        colors.footerTextMaterial,
        footerDivider && colors.outlineMaterial
      ),
    },
  };
};
