interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'span'
   */
  component?: string;
  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     *
     * @default 'bg-black/10 dark:bg-primary/10'
     */
    trackBgIos?: string;
    /**
     *
     * @default 'bg-md-light-primary/30 dark:bg-md-dark-primary/30'
     */
    trackBgMaterial?: string;
    /**
     *
     * @default 'bg-primary'
     */
    activeBgIos?: string;
    /**
     *
     * @default 'bg-md-light-primary dark:bg-md-dark-primary'
     */
    activeBgMaterial?: string;
  };
  /**
   * Determinate progress (from 0 to 1)
   *
   * @default 0
   */
  progress?: number;
}
