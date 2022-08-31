interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'span'
   */
  component?: string;
  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     *
     * @default 'text-primary'
     */
    iconIos?: string;
    /**
     *
     * @default 'text-md-light-primary dark:text-md-dark-primary'
     */
    iconMaterial?: string;
  };
  /**
   * Tailwind CSS size classes
   *
   * @default 'w-8 h-8'
   * */
  size?: string;
}
