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
     * Panel bg color
     *
     * @default 'bg-white dark:bg-black'
     */
    bgIos?: string;
    /**
     * Panel bg color
     *
     * @default 'bg-md-light-surface dark:bg-md-dark-surface'
     */
    bgMaterial?: string;
    /**
     * Panel bg color
     *
     * @default 'bg-ios-light-glass dark:bg-ios-dark-glass'
     */
    floatingBgIos?: string;
    /**
     * Panel bg color
     *
     * @default 'bg-md-light-surface dark:bg-md-dark-surface'
     */
    floatingBgMaterial?: string;
  };

  /**
   * Panel side
   *
   * @default 'left'
   */
  side?: 'left' | 'right';
  /**
   * Allows to open/close Panel and set its initial state
   *
   * @default false
   */
  opened?: boolean;

  /**
   * When enabled opened panel will have extra spaces from sides
   *
   * @default false
   */

  floating?: boolean;
  /**
   * Enables Panel backdrop (dark semi transparent layer behind)
   *
   * @default true
   */
  backdrop?: boolean;
  /**
   * Click handler on backdrop element
   */
  onBackdropClick?: (e: any) => void;
}
