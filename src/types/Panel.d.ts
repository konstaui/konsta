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
    bg?: string;
  };
  /**
   * Tailwind CSS size classes
   *
   * @default 'w-72 h-screen'
   * */
  size?: string;

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
