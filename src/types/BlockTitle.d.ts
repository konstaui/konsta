interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'div'
   */
  component?: string;

  /**
   * Medium sized block title
   *
   * @default false
   */
  medium?: boolean;

  /**
   * Large sized block title
   *
   * @default false
   */
  large?: boolean;

  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     *
     * @default 'text-black/60 dark:text-white/60'
     */
    textIos?: string;
    /**
     *
     * @default 'text-md-light-primary dark:text-md-dark-primary'
     */
    textMaterial?: string;

    /**
     *
     * @default 'text-black dark:text-white'
     */
    mediumTextIos?: string;

    /**
     *
     * @default 'text-md-light-primary dark:text-md-dark-primary'
     */
    mediumTextMaterial?: string;

    /**
     *
     * @default 'text-black dark:text-white'
     */
    largeTextIos?: string;

    /**
     *
     * @default 'text-md-light-primary dark:text-md-dark-primary'
     */
    largeTextMaterial?: string;
  };
}
