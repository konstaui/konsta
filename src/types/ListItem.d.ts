interface Props {
  component?: string;
  colors?: object;

  mediaClassName?: string;
  innerClassName?: string;
  innerChildren?: string | number | React.ReactNode;
  contentClassName?: string;
  contentChildren?: string | number | React.ReactNode;
  titleWrapClassName?: string;

  title?: string | number | React.ReactNode;
  subtitle?: string | number | React.ReactNode;
  text?: string | number | React.ReactNode;
  after?: string | number | React.ReactNode;
  media?: string | number | React.ReactNode;
  header?: string | number | React.ReactNode;
  footer?: string | number | React.ReactNode;

  menuListItem?: boolean;
  menuListItemActive?: boolean;

  hairlines?: boolean;

  divider?: boolean;
  groupTitle?: boolean;

  strongTitle?: boolean | 'auto';

  label?: boolean;

  chevron?: boolean;
  chevronIcon?: boolean;
  href?: boolean | string;
  target?: string;

  link?: boolean;
  linkComponent?: string;
  linkProps?: any;
}
