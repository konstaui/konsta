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
     * Button text color
     *
     * @default 'text-black text-opacity-55 dark:text-white dark:text-opacity-55'
     */
    text?: string;
    /**
     * Full button bg color
     *
     * @default 'bg-white dark:bg-neutral-800'
     */
    bg?: string;
    /**
     * Clicked fill button bg color
     *
     * @default 'active:bg-neutral-200 dark:active:bg-neutral-700'
     */
    activeBg?: string;
  };

  /**
   * Button text font size in iOS theme
   *
   * @default 'text-sm'
   */
  fontSizeIos?: string;
  /**
   * Button text font size in Material theme
   *
   * @default 'text-sm'
   */
  fontSizeMaterial?: string;

  /**
   * Renders button outer hairlines (borders)
   *
   * @default true
   */
  hairlines?: boolean;
}
