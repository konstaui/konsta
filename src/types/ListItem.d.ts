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
     *
     * @default 'text-black dark:text-white'
     */
    primaryTextIos?: string;
    /**
     *
     * @default 'text-md-light-on-surface dark:text-md-dark-on-surface'
     */
    primaryTextMaterial?: string;
    /**
     *
     * @default 'text-black/55 dark:text-white/55'
     */
    secondaryTextIos?: string;
    /**
     *
     * @default 'text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant'
     */
    secondaryTextMaterial?: string;
    /**
     *
     * @default 'active:bg-black/10 dark:active:bg-white/10'
     */
    activeBgIos?: string;
    /**
     *
     * @default ''
     */
    activeBgMaterial?: string;
    /**
     *
     * @default 'bg-ios-light-surface-variant dark:bg-ios-dark-surface-variant'
     */
    groupTitleBgIos?: string;
    /**
     *
     * @default 'bg-md-light-surface-2 dark:bg-md-dark-surface-2'
     */
    groupTitleBgMaterial?: string;
    /**
     *
     * @default 'text-black dark:text-white'
     */
    menuListItemTextIos?: string;
    /**
     *
     * @default 'text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant'
     */
    menuListItemTextMaterial?: string;
    /**
     *
     * @default 'active:bg-black/10 dark:active:bg-white/10'
     */
    menuListItemBgIos?: string;
    /**
     *
     * @default 'bg-md-light-surface-1 dark:bg-md-dark-surface-1'
     */
    menuListItemBgMaterial?: string;
    /**
     *
     * @default 'text-primary dark:text-white'
     */
    menuListItemActiveTextIos?: string;
    /**
     *
     * @default 'text-md-light-on-secondary-container dark:text-md-dark-on-secondary-container'
     */
    menuListItemActiveTextMaterial?: string;
    /**
     *
     * @default 'bg-primary/15 dark:bg-primary'
     */
    menuListItemActiveBgIos?: string;
    /**
     *
     * @default 'bg-md-light-secondary-container dark:bg-md-dark-secondary-container'
     */
    menuListItemActiveBgMaterial?: string;

    /**
     *
     * @default 'touch-ripple-black dark:touch-ripple-white'
     */
    touchRipple?: string;
    /**
     *
     * @default 'text-black/90 dark:text-white/90'
     */
    groupTitleContactsTextIos?: string;
    /**
     *
     * @default 'text-md-light-primary dark:text-md-dark-primary'
     */
    groupTitleContactsTextMaterial?: string;
    /**
     *
     * @default 'dark:bg-[#323234]'
     */
    groupTitleContactsBgIos?: string;
    /**
     *
     * @default 'bg-transparent dark:bg-transparent'
     */
    groupTitleContactsBgMaterial?: string;
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
   * Renders dividers (borders) between list items. If not specified then inherits `dividers` prop value from parent List component
   *
   * @default undefined
   */
  dividers?: boolean;
  /**
   * Enables Contacts List by adding required additional classes for styling
   *
   * @default undefined
   */
  contacts?: boolean;
  /**
   * Renders it as a list group title
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
   * Enables chevron icon if list item is link. Overwrites `chevronIos` and `chevronMaterial`
   *
   * @default undefined
   */
  chevron?: boolean;
  /**
   * Enables chevron icon if list item is link in iOS theme
   *
   * @default true
   */
  chevronIos?: boolean;
  /**
   * Enables chevron icon if list item is link in Material theme
   *
   * @default true
   */
  chevronMaterial?: boolean;
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
}
