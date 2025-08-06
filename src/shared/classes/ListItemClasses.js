import { cls } from '../cls.js';

export const ListItemClasses = (
  props,
  colors,
  {
    isMediaItem,
    theme,
    textColor,
    needsTouchRipple,
    isMenuListItemActive,
    autoStrongTitle,
    nested,
  },
  baseClassName
) => {
  const {
    menuListItem,
    dividers,
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
    contacts,
  } = props;
  return {
    base: {
      common: cls(
        'k-list-item',
        menuListItem ? `${textColor} py-1` : '',
        baseClassName
      ),
      material: contacts && '[&:nth-child(2)]:-mt-12',
    },
    itemContent: {
      common: cls(`flex items-center ${contentClassName || contentClass}`),
      ios: cls(
        !menuListItem &&
          cls(colors.primaryTextIos, nested ? 'ps-4' : 'ps-safe-4'),
        menuListItem && 'rounded-2xl ml-safe-2 mr-safe-2 ps-2'
      ),
      material: cls(
        !menuListItem &&
          cls(
            colors.primaryTextMaterial,
            isMediaItem ? 'ml-safe-2 mr-safe-2 rounded-2xl ps-2' : 'ps-safe-4',
            contacts && 'ml-10'
          ),
        menuListItem && 'rounded-full min-h-[3.5rem] ml-safe-4 mr-safe-4 ps-4'
      ),
      link: cls(
        'duration-300 active:duration-0 cursor-pointer select-none',
        dividers && theme === 'ios' && 'active:hairline-transparent',
        needsTouchRipple &&
          cls(`relative overflow-hidden z-10`, colors.touchRipple),
        isMenuListItemActive
          ? cls(
              theme === 'ios'
                ? colors.menuListItemActiveBgIos
                : colors.menuListItemActiveBgMaterial
            )
          : menuListItem
            ? cls(
                theme === 'ios'
                  ? colors.menuListItemBgIos
                  : colors.menuListItemBgMaterial
              )
            : cls(
                theme === 'ios' ? colors.activeBgIos : colors.activeBgMaterial
              )
      ),
    },
    media: {
      common: `shrink-0 flex ${mediaClassName || mediaClass}`,
      ios: 'py-2 me-4',
      material: cls('py-3', menuListItem ? 'me-3' : 'me-4'),
    },
    inner: {
      common: cls(
        'w-full relative',
        !menuListItem && dividers && 'hairline-b',
        innerClassName || innerClass
      ),
      ios: cls('py-3 pe-safe-4'),
      material: cls(
        'py-3',
        isMediaItem && !menuListItem ? 'pe-2' : 'pe-safe-4'
      ),
    },
    titleWrap: {
      common: cls(
        `flex justify-between items-center ${
          titleWrapClassName || titleWrapClass
        }`
      ),
      ios: cls(!menuListItem && titleFontSizeIos, !menuListItem && 'min-h-7'),
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
      common: cls(`shrink-0 ms-auto ps-1 flex items-center gap-1`),
      ios: colors.secondaryTextIos,
      material: cls(colors.secondaryTextMaterial, 'text-sm'),
    },
    chevron: 'opacity-20 shrink-0 ms-3 rtl:rotate-180',
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

    groupTitle: {
      common: cls(
        `pl-safe-4 pr-safe-4 py-1 flex items-center z-20`
        // divider ? 'relative' : 'sticky top-0'
      ),
      ios: `h-8${dividers ? ' hairline-t' : ''} -mt-px ${titleFontSizeIos} ${
        colors.secondaryTextIos
      } ${colors.groupTitleBgIos} ${
        contacts &&
        cls(
          'font-semibold top-safe-15 sticky',
          colors.groupTitleContactsTextIos,
          colors.groupTitleContactsBgIos
        )
      }`,
      material: `h-12 ${titleFontSizeMaterial} ${
        colors.secondaryTextMaterial
      } ${colors.groupTitleBgMaterial} ${
        contacts &&
        cls(
          'pointer-events-none overflow-visible h-12 box-border text-xl font-medium flex max-w-full items-center px-4 top-safe-16 sticky',
          colors.groupTitleContactsTextMaterial,
          colors.groupTitleContactsBgMaterial
        )
      }`,
    },
  };
};
