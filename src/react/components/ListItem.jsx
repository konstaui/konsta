import React from 'react';
import { cls } from '../shared/cls';
import { useTheme } from '../shared/use-theme';
import ChevronIcon from './icons/ChevronIcon';

const ListItem = (props) => {
  const {
    component = 'li',
    colors: colorsProp,
    className,
    mediaClassName = '',
    innerClassName = '',
    innerChildren,
    contentClassName = '',
    contentChildren,
    titleWrapClassName = '',

    // Content props
    title,
    subtitle,
    text,
    after,
    media,
    header,
    footer,

    menuListItem,
    menuListItemActive,

    // Enable divider
    divider,
    groupTitle,

    // Title
    strongTitle = 'auto',

    // Label props
    label,

    // Link props
    chevron = true,
    chevronIcon,
    href,
    target,

    link,
    linkComponent = 'a',
    linkProps = {},

    ios,
    material,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const Component = component;

  const attrs = {
    ...rest,
  };

  const colors = {
    text: 'text-black',
    menuListItemText: 'text-primary',
    menuListItemBg: 'bg-primary',
    ...colorsProp,
  };

  const isMenuListItemActive = menuListItem && menuListItemActive;

  const textColor = isMenuListItemActive
    ? colors.menuListItemText
    : colors.text;

  const { themeClasses } = useTheme({ ios, material });

  const c = themeClasses(
    {
      base: menuListItem ? `${textColor} py-1` : '',
      itemContent: {
        common: `${
          menuListItem ? 'pl-2 mx-2 rounded-lg' : 'pl-4'
        } flex items-center ${contentClassName}`,
        link: `active:bg-black active:bg-opacity-10 duration-300 active:duration-0 active:hairline-transparent cursor-pointer select-none${
          isMenuListItemActive ? ' bg-primary bg-opacity-15' : ''
        }`,
      },
      media: {
        common: `mr-4 flex-shrink-0 ${mediaClassName}`,
        ios: 'py-2',
        material: 'py-3 min-w-10',
      },
      inner: {
        common: `pr-4 w-full relative ${
          !menuListItem ? 'hairline-b' : ''
        } ${innerClassName}`,
        ios: 'py-2.5',
        material: 'py-3',
      },
      titleWrap: `flex justify-between items-center ${titleWrapClassName}`,
      title: {
        common: `flex-shrink`,
        menuListItem: {
          common: 'text-sm font-medium',
        },
        strong: {
          common: '',
          ios: 'font-semibold',
          material: 'font-medium',
        },
      },
      after: `${textColor} text-opacity-55 flex-shrink-0 ml-auto pl-1 flex items-center space-x-1`,
      chevron: 'opacity-20 flex-shrink-0 ml-3',
      subtitle: 'text-sm',
      text: `text-sm ${textColor} text-opacity-55 line-clamp-2`,
      header: 'text-xs mb-0.5',
      footer: `text-xs ${textColor} text-opacity-55 mt-0.5`,

      divider: {
        common: `bg-gray-100 text-black text-opacity-55 px-4 py-1 flex items-center -m-0.5 ${
          divider ? 'relative' : 'sticky top-0 z-10'
        }`,
        ios: `h-8 hairline-t`,
        material: 'h-12',
      },
    },
    className
  );

  const isLink = !!href || href === '' || menuListItem || link;
  const isLabel = !!label;

  const hrefComputed =
    href === true || href === false || typeof href === 'undefined'
      ? undefined
      : href || '';
  const ItemContentComponent = isLink
    ? linkComponent
    : isLabel
    ? 'label'
    : 'div';
  const linkPropsComputed = isLink
    ? { href: hrefComputed, target, ...linkProps }
    : {};
  const itemContentClasses =
    isLink || isLabel ? c.itemContent.link : c.itemContent.default;
  const autoStrongTitle = strongTitle === 'auto' && title && (subtitle || text);
  const titleClasses = menuListItem
    ? c.title.menuListItem
    : strongTitle === true || autoStrongTitle
    ? c.title.strong
    : c.title.default;

  if (divider || groupTitle) {
    return (
      <Component className={cls(c.divider, className)}>
        {title}
        {children}
      </Component>
    );
  }

  return (
    <Component className={c.base} {...attrs}>
      <ItemContentComponent
        className={itemContentClasses}
        {...linkPropsComputed}
      >
        {media && <div className={c.media}>{media}</div>}
        <div className={c.inner}>
          {header && <div className={c.header}>{header}</div>}
          {(title || after) && (
            <div className={c.titleWrap}>
              {title && <div className={titleClasses}>{title}</div>}
              {after && <div className={c.after}>{after}</div>}
              {isLink &&
                chevron &&
                !menuListItem &&
                (chevronIcon || <ChevronIcon className={c.chevron} />)}
            </div>
          )}
          {subtitle && <div className={c.subtitle}>{subtitle}</div>}
          {text && <div className={c.text}>{text}</div>}
          {footer && <div className={c.footer}>{footer}</div>}
          {innerChildren}
        </div>
        {contentChildren}
      </ItemContentComponent>
      {children}
    </Component>
  );
};

export default ListItem;
