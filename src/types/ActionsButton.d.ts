interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'button'
   */
  component?: string;
  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     *
     * @default ''
     */
    bgIos?: string;
    /**
     *
     * @default ''
     */
    bgMaterial?: string;
    /**
     *
     * @default 'active:bg-black/10 dark:active:bg-white/5'
     */
    activeBgIos?: string;
    /**
     *
     * @default ''
     */
    activeBgMaterial?: string;
    /**
     *
     * @default 'text-primary'
     */
    textIos?: string;
    /**
     *
     * @default 'text-md-light-on-surface dark:text-md-dark-on-surface'
     */
    textMaterial?: string;
  };
  /**
   * Link's `href` attribute, when specified will also be rendered as `<a>` element
   * */
  href?: string;

  /**
   * Makes button text bold. Overwrites `boldIos` and `boldMaterial`
   *
   * @default undefined
   */
  bold?: boolean;

  /**
   * Makes button text bold in iOS theme
   *
   * @default false
   */
  boldIos?: boolean;

  /**
   * Makes button text bold in Material theme
   *
   * @default false
   */
  boldMaterial?: boolean;

  /**
   * Button text font size in iOS theme
   *
   * @default 'text-xl'
   */
  fontSizeIos?: string;
  /**
   * Button text font size in Material theme
   *
   * @default 'text-base'
   */
  fontSizeMaterial?: string;

  /**
   * Renders button outer hairlines (borders). If not specified, will be enabled for iOS theme
   *
   * @default undefined
   */
  dividers?: boolean;
}
