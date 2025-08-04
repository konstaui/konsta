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
     * Dialog bg color in iOS theme
     *
     * @default 'bg-ios-light-glass dark:bg-ios-dark-glass'
     */
    bgIos?: string;
    /**
     * Dialog bg color in iOS theme
     *
     * @default 'bg-md-light-surface-3 dark:bg-md-dark-surface-3'
     */
    bgMaterial?: string;
    /**
     * Title text color in iOS theme
     *
     * @default ''
     */
    titleIos?: string;
    /**
     * Title text color in Material theme
     *
     * @default 'text-md-light-on-surface dark:text-md-dark-on-surface'
     */
    titleMaterial?: string;
    /**
     * Content text color in iOS theme
     *
     * @default ''
     */
    contentTextIos?: string;
    /**
     * Content text color in Material theme
     *
     * @default 'text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant'
     */
    contentTextMaterial?: string;
  };

  /**
   * Tailwind CSS classes for title font size iOS theme
   *
   * @default 'text-[17px]'
   * */
  titleFontSizeIos?: string;
  /**
   * Tailwind CSS classes for title font size Material theme
   *
   * @default 'text-[24px]'
   * */
  titleFontSizeMaterial?: string;

  /**
   * Dialog title content
   */
  title?: string | number | React.ReactNode;
  /**
   * Dialog main content
   */
  content?: string | number | React.ReactNode;
  /**
   * Dialog buttons content
   */
  buttons?: string | number | React.ReactNode;

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
