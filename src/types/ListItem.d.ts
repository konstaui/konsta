interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'li'
   */
  component?: string;
  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     * List item text color
     *
     * @default 'text-black dark:text-white'
     */
    text?: string;
    /**
     * Menu list item text color
     *
     * @default 'text-primary dark:text-white'
     */
    menuListItemText?: string;
    /**
     * Active menu list item bg color
     *
     * @default 'bg-primary dark:bg-primary'
     */
    menuListItemActiveBg?: string;
  };

  /**
   * Additional class to add on item "media" element
   */
  mediaClassName?: string;
  /**
   * Additional class to add on item "inner" element
   */
  innerClassName?: string;
  /**
   * Content of the item-inner
   */
  innerChildren?: string | number | React.ReactNode;
  /**
   * Additional class to add on item "content" element
   */
  contentClassName?: string;
  /**
   * Content of the item-content
   */
  contentChildren?: string | number | React.ReactNode;

  /**
   * Tailwind CSS class for item title font size in iOS theme
   *
   * @default 'text-[17px]'
   */
  titleFontSizeIos?: string;
  /**
   * Tailwind CSS class for item title font size in Material theme
   *
   * @default 'text-[16px]'
   */
  titleFontSizeMaterial?: string;
  /**
   * Additional class to add on item "titleWrap" element
   */
  titleWrapClassName?: string;

  /**
   * Content of the list item "title" area
   */
  title?: string | number | React.ReactNode;
  /**
   * Content of the list item "subtitle" area
   */
  subtitle?: string | number | React.ReactNode;
  /**
   * Content of the list item "text" area
   */
  text?: string | number | React.ReactNode;
  /**
   * Content of the list item "after" area
   */
  after?: string | number | React.ReactNode;
  /**
   * Content of the list item "media" area
   */
  media?: string | number | React.ReactNode;
  /**
   * Content of the list item "header" area
   */
  header?: string | number | React.ReactNode;
  /**
   * Content of the list item "footer" area
   */
  footer?: string | number | React.ReactNode;

  /**
   * Renders list item as menu list item (same as `<MenuListItem>`)
   */
  menuListItem?: boolean;
  /**
   * Makes menu list item highlighted (active) (same as `<MenuListItem active>`)
   *
   * @default false
   */
  menuListItemActive?: boolean;

  /**
   * Renders item as list divider
   *
   * @default false
   */
  divider?: boolean;

  /**
   * Renders dividers (borders) between list items. If not specified then inherits `dividers` prop value from parent List component
   *
   * @default undefined
   */
  dividers?: boolean;
  /**
   * Renders it as list group title
   *
   * @default false
   */
  groupTitle?: boolean;

  /**
   * Makes item title strong (bold). When `'auto'` it will make it strong if there is also `subtitle` or `text` specified
   */
  strongTitle?: boolean | 'auto';

  /**
   * Renders item content as `<label>` element. Useful to create radio/checkbox list items
   *
   * @default false
   */
  label?: boolean;
  /**
   * Enables chevron icon if list item is link
   *
   * @default true
   */
  chevron?: boolean;
  /**
   * Allows to replace default chevron icon with custom one
   */
  chevronIcon?: React.ReactNode;

  /**
   * Renders list item as link (`<a>`)
   *
   * @default false
   */
  link?: boolean;
  /**
   * List item link HTML Element
   *
   * @default 'a'
   */
  linkComponent?: string;
  /**
   * Object with additional props (attributes) to pass to the Link/Button
   */
  linkProps?: any;
  /**
   * List item link's `href` attribute
   */
  href?: boolean | string;
  /**
   * List item link's `target` attribute
   */
  target?: string;
  /**
   * Enables touch ripple effect in Material theme
   *
   * @default true
   */
  touchRipple?: boolean;
}
