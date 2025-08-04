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
     * @default 'bg-black/10 dark:bg-white/15'
     */
    tabbarHighlightBgIos?: string;
  };
}
