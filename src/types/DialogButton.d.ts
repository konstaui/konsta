interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'button'
   */
  component?: string;
  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     * Active/pressed state bg color in iOS theme
     *
     * @default 'active:bg-black active:bg-opacity-10 dark:active:bg-white dark:active:bg-opacity-10'
     */
    activeBgIos?: string;
    /**
     * Text color in iOS theme
     *
     * @default ''text-primary
     */
    textIos?: string;
    /**
     * Disabled button text color in iOS theme
     *
     * @default 'text-black text-opacity-30 dark:text-white dark:text-opacity-30'
     */
    disabledTextIos?: string;
  };
  /**
   * Makes button bold in iOS theme and fill in Material theme, overwrites `strongIos` and `strongMaterial`
   *
   * @default false
   */
  strong?: boolean;
  /**
   * Makes button bold in iOS theme
   *
   * @default false
   */
  strongIos?: boolean;
  /**
   * Makes button fill in Material theme
   *
   * @default false
   */
  strongMaterial?: boolean;

  /**
   * Makes button disabled
   *
   * @default false
   */
  disabled?: boolean;
}
