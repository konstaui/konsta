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
     * @default 'text-black/55 dark:text-white/55'
     */
    textIos?: string;
    /**
     *
     * @default 'text-md-light-primary dark:text-md-dark-primary'
     */
    textMaterial?: string;
  };

  /**
   * Button text font size in iOS theme
   *
   * @default 'text-sm'
   */
  fontSizeIos?: string;
  /**
   * Button text font size in Material theme
   *
   * @default 'text-sm'
   */
  fontSizeMaterial?: string;

  /**
   * Renders button outer hairlines (borders). If not specified, will be enabled in iOS theme
   *
   * @default undefined
   */
  dividers?: boolean;
}
