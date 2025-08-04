interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'div'
   */
  component?: string;

  /**
   * Renders group outer hairlines (borders). (in Material theme only)
   *
   * @default true
   */
  dividers?: boolean;

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
     * @default 'bg-md-light-surface-3 dark:bg-md-dark-surface-3'
     */
    bgMaterial?: string;
  };
}
