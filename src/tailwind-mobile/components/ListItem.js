import React from 'react';
import { classNames } from '../shared/classnames';
import ChevronIcon from './ChevronIcon';

const ListItem = (props) => {
  const {
    tag = 'li',
    className,

    // Content props
    title,
    subtitle,
    text,
    after,
    media,
    header,
    footer,

    // Hairlines
    hairline = true,

    // Enable divider
    divider = false,

    // Title
    strongTitle = 'auto',

    // Link props
    chevron = true,
    chevronIcon,
    href,
    target,

    // Theme
    ios,
    material,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const Component = tag;

  const attrs = {
    ...rest,
  };

  const theme = ios ? 'ios' : material ? 'material' : 'common';

  const c = {
    base: `relative last:no-hairlines`,
    itemContent: 'pl-4 flex items-center',
    link:
      'active:bg-black active:bg-opacity-10 duration-300 active:duration-0 active-no-hairline cursor-pointer select-none',
    media: {
      initial: 'mr-4 flex-shrink-0',
      ios: 'py-2.5',
      material: 'py-3 min-w-10',
      common: 'ios:py-2.5 material:py-3 material:min-w-10',
    },
    inner: {
      initial: `py-2 pr-4 w-full relative ${hairline ? 'hairline-b' : ''}`,
      ios: 'py-2.5',
      material: 'py-3',
      common: 'ios:py-2.5 material:py-3',
    },
    titleWrap: 'flex justify-between items-center',
    title: 'flex-shrink',
    strongTitle: {
      initial: '',
      ios: 'font-semibold',
      material: 'font-medium',
      common: 'ios:font-semibold material:font-medium',
    },

    after:
      'text-black text-opacity-55 flex-shrink-0 ml-auto pl-1 flex items-center space-x-1',
    chevron: 'opacity-20 flex-shrink-0 ml-3',
    subtitle: 'text-sm',
    text: 'text-sm text-black text-opacity-55 line-clamp-2',
    header: 'text-xs mb-0.5',
    footer: 'text-xs text-black text-opacity-55 mt-0.5',

    divider: {
      initial:
        'bg-gray-100 text-black text-opacity-55 px-4 py-1 flex items-center -m-0.5 relative',
      ios: `h-8 ${hairline ? 'hairline-t' : ''}`,
      material: 'h-12',
      common: `ios:h-8 material:h-12 ${hairline ? 'ios:hairline-t' : ''}`,
    },
  };

  const classes = classNames([c.base, className]);

  const isLink = !!href || href === '';
  const hrefComputed = href === true || href === false ? undefined : href || '';
  const ItemContentComponent = isLink ? 'a' : 'div';
  const linkProps = isLink ? { href: hrefComputed, target } : {};
  const itemContentClasses = classNames([c.itemContent, isLink && c.link]);
  const mediaClasses = classNames([c.media.initial, c.media[theme]]);
  const innerClasses = classNames([c.inner.initial, c.inner[theme]]);
  const autoStrongTitle = strongTitle === 'auto' && title && (subtitle || text);
  const titleClasses = classNames([
    c.title,
    (strongTitle === true || autoStrongTitle) && c.strongTitle.initial,
    (strongTitle === true || autoStrongTitle) && c.strongTitle[theme],
  ]);

  if (divider) {
    const dividerClasses = classNames(
      c.divider.initial,
      c.divider[theme],
      className
    );
    return (
      <Component className={dividerClasses}>
        {title}
        {children}
      </Component>
    );
  }

  return (
    <Component className={classes} {...attrs}>
      <ItemContentComponent className={itemContentClasses} {...linkProps}>
        {media && <div className={mediaClasses}>{media}</div>}
        <div className={innerClasses}>
          {header && <div className={c.header}>{header}</div>}
          {(title || after) && (
            <div className={c.titleWrap}>
              {title && <div className={titleClasses}>{title}</div>}
              {after && <div className={c.after}>{after}</div>}
              {isLink &&
                chevron &&
                (chevronIcon || <ChevronIcon className={c.chevron} />)}
            </div>
          )}
          {subtitle && <div className={c.subtitle}>{subtitle}</div>}
          {text && <div className={c.text}>{text}</div>}
          {footer && <div className={c.footer}>{footer}</div>}
        </div>
      </ItemContentComponent>
    </Component>
  );
};

export default ListItem;
