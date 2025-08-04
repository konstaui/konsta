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
     * @default 'bg-ios-light-surface-1 dark:bg-ios-dark-surface-1'
     */
    bgIos?: string;
    /**
     *
     * @default 'bg-md-light-surface dark:bg-md-dark-surface'
     */
    bgMaterial?: string;
  };

  /**
   * Allows to open/close Sheet modal and set its initial state
   *
   * @default false
   */
  opened?: boolean;
  /**
   * Enables Sheet modal backdrop (dark semi transparent layer behind)
   *
   * @default true
   */
  backdrop?: boolean;
  /**
   * Click handler on backdrop element
   */
  onBackdropClick?: (e: any) => void;
}
