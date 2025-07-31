interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'div'
   */
  component?: string;
  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     * Notifiaction bg color in iOS theme
     *
     * @default 'bg-ios-light-glass dark:bg-ios-dark-glass'
     */
    bgIos?: string;
    /**
     * Notification bg color in Material theme
     *
     * @default 'bg-md-light-surface-5 dark:bg-md-dark-surface-5'
     */
    bgMaterial?: string;
    /**
     * Notification title color in IOS theme
     *
     * @default 'text-black dark:text-white'
     */
    titleIos?: string;
    /**
     * Notification right text color in IOS theme
     *
     * @default 'text-black/45 dark:text-white/45'
     */
    titleRightIos?: string;
    /**
     * Notification right text color in Material theme
     *
     * @default 'text-md-light-on-surface-variant before:bg-md-light-on-surface-variant dark:text-md-dark-on-surface-variant before:dark:bg-md-dark-on-surface-variant'
     */
    titleRightMd?: string;
    /**
     * Notification subtitle color in IOS theme
     *
     * @default 'text-black dark:text-white'
     */
    subtitleIos?: string;
    /**
     * Notification text color in Material theme
     *
     * @default 'text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant'
     */
    textMaterial?: string;
    /**
     * Notification Delete Icon color in IOS theme
     *
     * @default 'fill-stone-400 active:fill-stone-200 dark:fill-stone-500 dark:active:fill-stone-700'
     */
    deleteIconIos?: string;
    /**
     * Notification Delete Icon color in Material theme
     *
     * @default 'text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant'
     */
    deleteIconMd?: string;
  };

  /**
   * Notification button content
   */
  button?: React.ReactNode;
  /**
   * Notification icon HTML layout or image
   */
  icon?: string | React.ReactNode;
  /**
   * Content of the notification "title" area
   */
  title?: string | number | React.ReactNode;
  /**
   * Content of the notification "title right text" area
   */
  titleRightText?: string | number | React.ReactNode;
  /**
   * Content of the notification "subtitle" area
   */
  subtitle?: string | number | React.ReactNode;
  /**
   * Content of the notification "text" area
   */
  text?: string | number | React.ReactNode;
  /**
   * Allows to open/close Notification and set its initial state
   *
   * @default undefined
   */
  opened?: boolean;
  /**
   * Click handler on to close element
   */
  onClose?: (e: any) => void;
}
