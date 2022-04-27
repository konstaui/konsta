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
     * Collapsed bg color
     *
     * @default 'bg-black bg-opacity-15 dark:bg-white dark:bg-opacity-15'
     */
    bg?: string;
    /**
     * Collapsed "dot" bg color
     *
     * @default 'bg-black dark:bg-white'
     */
    dotBg?: string;
  };
}
