import React from 'react';
import { classNames } from '../shared/classnames';

const Button = (props) => {
  const {
    tag = 'button',
    className,
    colors: colorsProp,

    // Theme
    ios,
    material,

    // Anchor props
    href,

    // Style props
    outline,
    clear,
    rounded,
    small,
    large,
    raised,

    // Segmented
    segmented,
    segmentedStrong,
    segmentedActive,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  let Component = tag;
  if (typeof props.tag === 'undefined' && (href || href === ''))
    Component = 'a';

  const attrs = {
    href,
    ...rest,
  };

  const theme = ios ? 'ios' : material ? 'material' : 'common';
  const size = large ? 'large' : small ? 'small' : 'medium';
  let style = outline
    ? 'outline'
    : clear || (segmented && !segmentedActive)
    ? 'clear'
    : 'fill';
  if (segmentedStrong) style = 'segmentedStrong';
  if (segmentedStrong && segmentedActive) style = 'segmentedStrongActive';

  const colors = {
    text: 'text-primary',
    activeText: 'active:text-primary',
    iosActiveText: 'ios-active:text-primary',
    border: 'border-primary',
    iosBorder: 'ios:border-primary',
    bg: 'bg-primary',
    activeBg: 'active:bg-primary',
    activeBgDark: 'active:bg-primary-dark',
    ...colorsProp,
  };

  const c = {
    base: {
      initial: `w-full uppercase flex text-center justify-center items-center appearance-none px-2 py-1 transition-colors focus:outline-none cursor-pointer select-none`,
      ios: `duration-100 font-semibold`,
      material: `duration-300 font-medium tracking-wider`,
      common: `ios:duration-100 ios:font-semibold material:duration-300 material:font-medium material:tracking-wider`,
    },
    shape: {
      default:
        segmented && !segmentedStrong
          ? 'first:rounded-l last:rounded-r'
          : 'rounded',
      rounded: segmented && !segmentedStrong ? '' : 'rounded-full',
    },
    style: {
      fill: `text-white ${colors.bg} ${colors.activeBgDark}`,
      outline: `${segmented ? '' : `border-2 ${colors.border}`} ${
        colors.text
      } ${colors.activeBg} active:bg-opacity-15`,
      clear: `${colors.text} ${colors.activeBg} active:bg-opacity-15`,
      segmentedStrong: 'active:bg-black active:bg-opacity-10',
      segmentedStrongActive: 'bg-white shadow',
    },
    size: {
      small: {
        ios: `text-xs h-7`,
        material: `text-sm h-7`,
        common: 'ios:text-xs ios:h-7 material:h-7 material:text-sm',
      },
      medium: {
        ios: `text-sm h-7`,
        material: `text-sm h-9`,
        common: `ios:text-sm ios:h-7 material:text-sm material:h-9`,
      },
      large: {
        ios: `h-11`,
        material: `h-12`,
        common: `ios:h-11 material:h-12`,
      },
    },
    raised: `shadow active:shadow-lg`,
    smallFill: {
      ios: `border-2 ${colors.border} active:bg-opacity-0 ${colors.activeText}`,
      common: `ios:border-2 ${colors.iosBorder} ios-active:bg-opacity-0 ${colors.iosActiveText}`,
    },
  };

  const classes = classNames([
    // base
    c.base.initial,
    c.base[theme],
    c.base[rounded ? 'rounded' : 'default'],
    // style
    c.style[style],
    style === 'fill' && small && c.smallFill[theme],
    // shape
    rounded ? c.shape.rounded : c.shape.default,
    // size
    c.size[size][theme],

    raised && c.raised,

    className,
  ]);

  return (
    <Component className={classes} {...attrs}>
      {children}
    </Component>
  );
};

export default Button;
