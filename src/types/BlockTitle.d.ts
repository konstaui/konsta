interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'div'
   */
  component?: string;
  /**
   * Useful to disable when there is no Block or List component right after the Block Title
   *
   * @default true
   */
  withBlock?: boolean;

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
     * @default ''
     */
    textIos?: string;
    /**
     *
     * @default 'text-md-light-primary dark:text-md-dark-primary'
     */
    textMaterial?: string;
  };
}
