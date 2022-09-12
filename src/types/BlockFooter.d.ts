interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'div'
   */
  component?: string;

  /**
   * Makes block footer inset, overwrites `insetIos` and `insetMaterial`
   *
   * @default undefined
   */
  inset?: boolean;

  /**
   * Makes block footer inset in iOS theme
   *
   * @default false
   */
  insetIos?: boolean;

  /**
   * Makes block footer inset in Material theme
   *
   * @default false
   */
  insetMaterial?: boolean;

  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     *
     * @default 'text-black text-opacity-75 dark:text-white dark:text-opacity-75'
     */
    textIos?: string;
    /**
     *
     * @default 'text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant'
     */
    textMaterial?: string;
  };
}
