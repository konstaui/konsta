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
     * @default 'bg-ios-light-surface dark:bg-ios-dark-surface'
     */
    bgIos?: string;
    /**
     *
     * @default 'bg-md-light-surface dark:bg-md-dark-surface'
     */
    bgMaterial?: string;
  };
}
