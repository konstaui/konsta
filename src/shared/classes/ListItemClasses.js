import { cls } from '../cls.js';

export const ListItemClasses = (
  props,
  colors,
  {
    theme,
    textColor,
    needsTouchRipple,
    isMenuListItemActive,
    darkClasses: dark,
    autoStrongTitle,
  }
) => {
  const {
    menuListItem,
    hairlines,
    mediaClassName = '',
    mediaClass = '',
    innerClassName = '',
    innerClass = '',
    contentClassName = '',
    contentClass = '',
    titleWrapClassName = '',
    titleWrapClass = '',
    titleFontSizeIos,
    titleFontSizeMaterial,
    strongTitle,
    divider,
  } = props;
  return {
    base: menuListItem ? `${textColor} py-1` : '',
    itemContent: {
      common: cls(
        menuListItem ? 'pl-2 ml-2-safe mr-2-safe rounded-lg' : 'pl-4-safe',
        `flex items-center ${contentClassName || contentClass}`
      ),
      ios: colors.primaryTextIos,
      material: colors.primaryTextMaterial,
      link: cls(
        'duration-300 active:duration-0 cursor-pointer select-none',
        hairlines && theme === 'ios' && 'active:hairline-transparent',
        needsTouchRipple &&
          cls(
            `relative overflow-hidden touch-ripple-black`,
            dark('dark:touch-ripple-white dark:z-10')
          ),
        isMenuListItemActive
          ? cls(colors.menuListItemActiveBg, 'bg-opacity-15')
          : theme === 'ios' &&
              cls(
                `active:bg-black active:bg-opacity-10`,
                dark('dark:active:bg-white dark:active:bg-opacity-10')
              )
      ),
    },

    media: {
      common: `mr-4 shrink-0 flex ${mediaClassName || mediaClass}`,
      ios: 'py-2',
      material: 'py-3',
    },
    inner: {
      common: cls(
        'pr-4-safe w-full relative',
        !menuListItem && hairlines && 'hairline-b',
        innerClassName || innerClass
      ),
      ios: 'py-2.5',
      material: 'py-3',
    },
    titleWrap: {
      common: cls(
        `flex justify-between items-center ${
          titleWrapClassName || titleWrapClass
        }`
      ),
      ios: cls(!menuListItem && titleFontSizeIos),
      material: cls(!menuListItem && titleFontSizeMaterial),
    },
    title: {
      common: `shrink`,
      menuListItem: cls(
        'text-sm',
        strongTitle === true || autoStrongTitle
          ? 'font-semibold'
          : 'font-medium'
      ),
      strong: {
        common: '',
        ios: 'font-semibold',
        material: 'font-medium',
      },
    },
    after: {
      common: cls(`shrink-0 ml-auto pl-1 flex items-center space-x-1`),
      ios: colors.secondaryTextIos,
      material: colors.secondaryTextMaterial,
    },
    chevron: 'opacity-20 shrink-0 ml-3',
    subtitle: 'text-sm',
    text: {
      common: cls(`text-sm line-clamp-2`),
      ios: colors.secondaryTextIos,
      material: colors.secondaryTextMaterial,
    },
    header: {
      common: 'text-xs mb-0.5',
      ios: colors.secondaryTextIos,
      material: colors.secondaryTextMaterial,
    },
    footer: {
      common: cls(`text-xs mt-0.5`),
      ios: colors.secondaryTextIos,
      material: colors.secondaryTextMaterial,
    },

    divider: {
      common: cls(
        `pl-4-safe pr-4-safe py-1 flex items-center z-20`,
        divider ? 'relative' : 'sticky top-0'
      ),
      ios: `h-8${hairlines ? ' hairline-t' : ''} -mt-px ${titleFontSizeIos} ${
        colors.secondaryTextIos
      } ${colors.dividerBgIos}`,
      material: `h-12 ${titleFontSizeMaterial} ${colors.secondaryTextMaterial} ${colors.dividerBgMaterial}`,
    },
  };
};
