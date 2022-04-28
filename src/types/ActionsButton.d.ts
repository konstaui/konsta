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
     * Button text color
     *
     * @default 'text-primary'
     */
    text?: string;
    /**
     * Full button bg color
     *
     * @default 'bg-white dark:bg-neutral-800'
     */
    bg?: string;
    /**
     * Clicked fill button bg color
     *
     * @default 'active:bg-neutral-200 dark:active:bg-neutral-700'
     */
    activeBg?: string;
  };
  /**
   * Link's `href` attribute, when specified will also be rendered as `<a>` element
   * */
  href?: string;

  /**
   * Makes button text bold
   *
   * @default false
   */
  bold?: boolean;

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
   * Enables touch ripple effect in Material theme
   *
   * @default true
   */
  touchRipple?: boolean;

  /**
   * Renders button outer hairlines (borders)
   *
   * @default true
   */
  hairlines?: boolean;
}
