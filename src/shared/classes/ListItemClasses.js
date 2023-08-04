import { cls } from '../cls.js';
import { positionClass } from '../position-class.js';

export const ListItemClasses = (
  props,
  colors,
  {
    className,
    isMediaItem,
    theme,
    textColor,
    needsTouchRipple,
    isMenuListItemActive,
    autoStrongTitle,
  }
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
      common: menuListItem ? `${textColor} py-1` : '',
      material: contacts && '[&:nth-child(2)]:-mt-12',
    },
    itemContent: {
      common: cls(`flex items-center ${contentClassName || contentClass}`),
      ios: cls(
        !menuListItem && cls(colors.primaryTextIos, 'ps-4-safe'),
        menuListItem && 'rounded-lg ml-2-safe mr-2-safe ps-2'
      ),
      material: cls(
        !menuListItem &&
          cls(
            colors.primaryTextMaterial,
            isMediaItem ? 'ml-2-safe mr-2-safe rounded-2xl ps-2' : 'ps-4-safe',
            contacts && 'ml-10'
          ),
        menuListItem && 'rounded-full min-h-[3.5rem] ml-4-safe mr-4-safe ps-4'
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
          : cls(theme === 'ios' ? colors.activeBgIos : colors.activeBgMaterial)
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
      ios: 'py-2.5 pe-4-safe',
      material: cls(
        'py-3',
        isMediaItem && !menuListItem ? 'pe-2' : 'pe-4-safe'
      ),
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
      common: cls(`shrink-0 ms-auto ps-1 flex items-center space-x-1`),
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
        `pl-4-safe pr-4-safe py-1 flex items-center z-20`,
        positionClass('relative', className)
        // divider ? 'relative' : 'sticky top-0'
      ),
      ios: `h-8${dividers ? ' hairline-t' : ''} -mt-px ${titleFontSizeIos} ${
        colors.secondaryTextIos
      } ${colors.groupTitleBgIos} ${
        contacts &&
        cls(
          'font-semibold top-11-safe sticky',
          colors.groupTitleContactsTextIos,
          colors.groupTitleContactsBgIos
        )
      }`,
      material: `h-12 ${titleFontSizeMaterial} ${
        colors.secondaryTextMaterial
      } ${colors.groupTitleBgMaterial} ${
        contacts &&
        cls(
          'pointer-events-none overflow-visible h-12 box-border text-xl font-medium flex max-w-full items-center px-4 top-16-safe sticky',
          colors.groupTitleContactsTextMaterial,
          colors.groupTitleContactsBgMaterial
        )
      }`,
    },
  };
};
