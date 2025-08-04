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
     * Popup bg color
     *
     * @default 'bg-white dark:bg-black'
     */
    bg?: string;
  };

  /**
   * Allows to open/close Popup and set its initial state
   *
   * @default false
   */
  opened?: boolean;
  /**
   * Enables Popup backdrop (dark semi transparent layer behind)
   *
   * @default true
   */
  backdrop?: boolean;
  /**
   * Click handler on backdrop element
   */
  onBackdropClick?: (e: any) => void;
}
