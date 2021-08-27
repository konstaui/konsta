import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { cls } from '../shared/cls.js';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';
import ChevronIcon from './icons/ChevronIcon.jsx';
import { useDarkClasses } from '../shared/use-dark-classes.js';

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

  const colors = {
    text: cls(`text-black`, dark('dark:text-white')),
    menuListItemText: cls(`text-primary`, dark('dark:text-white')),
    menuListItemActiveBg: 'bg-primary dark:bg-primary',
    ...colorsProp,
  };

  const isMenuListItemActive = menuListItem && menuListItemActive;

  const textColor = isMenuListItemActive
    ? colors.menuListItemText
    : colors.text;

  const isLink = !!href || href === '' || menuListItem || link;
  const isLabel = !!label;

  const needsTouchRipple = theme === 'material' && (isLabel || isLink);

  useTouchRipple(rippleElRef, needsTouchRipple);

  const c = themeClasses(
    {
      base: menuListItem ? `${textColor} py-1` : '',
      itemContent: {
        common: cls(
          menuListItem ? 'pl-2 mx-2 rounded-lg' : 'pl-4',
          `flex items-center ${contentClassName}`
        ),
        link: cls(
          'duration-300 active:duration-0 cursor-pointer select-none',
          hairlines && 'active:hairline-transparent',
          needsTouchRipple &&
            cls(
              `relative overflow-hidden`,
              dark('dark:touch-ripple-white z-10')
            ),
          isMenuListItemActive
            ? cls(colors.menuListItemActiveBg, 'bg-opacity-15')
            : cls(
                `active:bg-black active:bg-opacity-10`,
                dark('dark:active:bg-white dark:active:bg-opacity-10')
              )
        ),
      },

      media: {
        common: `mr-4 flex-shrink-0 ${mediaClassName}`,
        ios: 'py-2',
        material: 'py-3 min-w-10',
      },
      inner: {
        common: cls(
          'pr-4 w-full relative',
          !menuListItem && hairlines && 'hairline-b',
          innerClassName
        ),
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
      after: cls(
        textColor,
        `text-opacity-55 flex-shrink-0 ml-auto pl-1 flex items-center space-x-1`,
        dark('dark:text-opacity-55')
      ),
      chevron: 'opacity-20 flex-shrink-0 ml-3',
      subtitle: 'text-sm',
      text: cls(
        textColor,
        `text-sm text-opacity-55 line-clamp-2`,
        dark('dark:text-opacity-55')
      ),
      header: 'text-xs mb-0.5',
      footer: cls(
        textColor,
        `text-xs text-opacity-55 mt-0.5`,
        dark('dark:text-opacity-55')
      ),

      divider: {
        common: cls(
          `bg-list-divider-light text-black text-opacity-55 px-4 py-1 flex items-center z-10`,
          divider ? 'relative' : 'sticky top-0',
          dark(`dark:bg-list-divider-dark dark:text-white dark:text-opacity-55`)
        ),
        ios: `h-8${hairlines ? ' hairline-t' : ''} -m-0.5`,
        material: 'h-12',
      },
    },
    className
  );

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
