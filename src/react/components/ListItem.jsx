import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { cls } from '../../shared/cls.js';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';
import ChevronIcon from './icons/ChevronIcon.jsx';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { ListItemClasses } from '../../shared/classes/ListItemClasses.js';
import { ListItemColors } from '../../shared/colors/ListItemColors.js';

const ListItem = forwardRef((props, ref) => {
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

    titleFontSizeIos = 'text-list-title-ios',
    titleFontSizeMaterial = 'text-list-title-material',

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

    hairlines = true,

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

    touchRipple = true,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const rippleElRef = useRef(null);
  const elRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  const Component = component;

  const attrs = {
    ...rest,
  };

  const theme = useTheme({ ios, material });
  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const colors = ListItemColors(colorsProp, dark);

  const isMenuListItemActive = menuListItem && menuListItemActive;

  const textColor = isMenuListItemActive
    ? colors.menuListItemText
    : colors.text;

  const isLink = !!href || href === '' || menuListItem || link;
  const isLabel = !!label;

  const needsTouchRipple =
    theme === 'material' && (isLabel || isLink) && touchRipple;

  useTouchRipple(rippleElRef, needsTouchRipple);

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

  const autoStrongTitle = strongTitle === 'auto' && title && (subtitle || text);

  const c = themeClasses(
    ListItemClasses(
      {
        ...props,
        titleFontSizeIos,
        titleFontSizeMaterial,
        hairlines,
        strongTitle,
        mediaClassName,
        innerClassName,
        contentClassName,
        titleWrapClassName,
      },
      colors,
      {
        theme,
        textColor,
        needsTouchRipple,
        isMenuListItemActive,
        darkClasses: dark,
        autoStrongTitle,
      }
    ),
    className
  );

  const itemContentClasses =
    isLink || isLabel ? c.itemContent.link : c.itemContent.default;

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
    <Component ref={elRef} className={c.base} {...attrs}>
      <ItemContentComponent
        ref={rippleElRef}
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
});

ListItem.displayName = 'ListItem';

export default ListItem;
