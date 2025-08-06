interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'a'
   */
  component?: string;
  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     *
     * @default 'bg-primary dark:bg-ios-primary-shade/50'
     */
    bgIos?: string;
    /**
     *
     * @default 'bg-md-light-primary-container dark:bg-md-dark-primary-container'
     */
    bgMaterial?: string;
    /**
     *
     * @default ''
     */
    activeBgIos?: string;
    /**
     *
     * @default ''
     */
    activeBgMaterial?: string;
    /**
     *
     * @default 'text-white'
     */
    textIos?: string;
    /**
     *
     * @default 'text-md-light-on-primary-container dark:text-md-dark-on-primary-container'
     */
    textMaterial?: string;
    /**
     *
     * @default 'touch-ripple-primary dark:touch-ripple-white'
     */
    touchRipple?: string;
  };
  /**
   * Fab's link `href` attribute
   */
  href?: string;
  /**
   * Button text (content)
   */
  text?: string | React.ReactNode;
  /**
   * Text position, can be `after` icon or `before` icon
   *
   * @default 'after'
   */
  textPosition?: 'after' | 'before';
  /**
   * Fab's icon
   */
  icon?: React.ReactNode;
}
