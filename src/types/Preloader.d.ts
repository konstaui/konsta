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
     * Preloader icon color
     *
     * @default 'text-primary'
     */
    icon?: string;
  };
  /**
   * Tailwind CSS size classes
   *
   * @default 'w-8 h-8'
   * */
  size?: string;
}
