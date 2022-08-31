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
     * @default ''
     */
    textIos?: string;
    /**
     *
     * @default 'text-md-light-on-surface dark:text-md-dark-on-surface'
     */
    textMaterial?: string;
    /**
     *
     * @default 'bg-ios-light-surface-1 dark:bg-ios-dark-surface-1'
     */
    bgIos?: string;
    /**
     *
     * @default 'bg-md-light-surface-1 dark:bg-md-dark-surface-1'
     */
    bgMaterial?: string;
    /**
     *
     * @default 'text-black text-opacity-55 dark:text-white dark:text-opacity-55'
     */
    footerTextIos?: string;
    /**
     *
     * @default 'text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant'
     */
    footerTextMaterial?: string;
    /**
     *
     * @default 'border-black border-opacity-20 dark:border-white dark:border-opacity-20'
     */
    outlineIos?: string;
    /**
     *
     * @default 'border-md-light-outline dark:border-md-dark-outline'
     */
    outlineMaterial?: string;
  };
  /**
   * Tailwind CSS margin class
   *
   * @default 'm-4'
   * */
  margin?: string;
  /**
   * Content of the Card header
   */
  header?: string | React.ReactNode;
  /**
   * Content of the Card footer
   */
  footer?: string | React.ReactNode;
  /**
   * Makes card outline. Overwrites `outlineIos` and `outlineMaterial`
   *
   * @default undefined
   */
  outline?: boolean;
  /**
   * Makes card outline in iOS theme
   *
   * @default undefined
   */
  outlineIos?: boolean;
  /**
   * Makes card outline in Material theme
   *
   * @default undefined
   */
  outlineMaterial?: boolean;
  /**
   * Makes card raised. Overwrites `raisedIos` and `raisedMaterial`
   *
   * @default undefined
   */
  raised?: boolean;
  /**
   * Makes card raised in iOS theme
   *
   * @default undefined
   */
  raisedIos?: boolean;
  /**
   * Makes card raised in Material theme
   *
   * @default undefined
   */
  raisedMaterial?: boolean;
  /**
   * Enabled divider between header and content
   *
   * @default false
   */
  headerDivider?: boolean;
  /**
   * Enabled divider between footer and content
   *
   * @default false
   */
  footerDivider?: boolean;
}
