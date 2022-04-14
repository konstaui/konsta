<script>
import { cls } from '../../shared/cls.js';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';
import ChevronIcon from './icons/ChevronIcon.jsx';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { ListItemClasses } from '../../shared/classes/ListItemClasses.js';

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

  const theme = useTheme({ ios, material });

  const dark = useDarkClasses();

  $: colors = {
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

  $: c = useThemeClasses(
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
      <Component class={cls(c.divider, className)}>
        {title}
        <slot />
      </Component>
    );
  }

  return (
    <Component class={c.base} {...$$restProps}>
      <ItemContentComponent
        ref={rippleElRef}
        class={itemContentClasses}
        {...linkPropsComputed}
      >
        {media && <div class={c.media}>{media}</div>}
        <div class={c.inner}>
          {header && <div class={c.header}>{header}</div>}
          {(title || after) && (
            <div class={c.titleWrap}>
              {title && <div class={titleClasses}>{title}</div>}
              {after && <div class={c.after}>{after}</div>}
              {isLink &&
                chevron &&
                !menuListItem &&
                (chevronIcon || <ChevronIcon class={c.chevron} />)}
            </div>
          )}
          {subtitle && <div class={c.subtitle}>{subtitle}</div>}
          {text && <div class={c.text}>{text}</div>}
          {footer && <div class={c.footer}>{footer}</div>}
          {innerChildren}
        </div>
        {contentChildren}
      </ItemContentComponent>
      <slot />
    </Component>
  );
});

ListItem.displayName = 'ListItem';

export default ListItem;

</script>