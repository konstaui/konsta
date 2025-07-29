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
     * @default 'bg-black/5 dark:bg-white/10'
     */
    strongBgIos?: string;
    /**
     *
     * @default 'bg-md-light-surface-variant dark:bg-md-dark-surface-variant'
     */
    strongBgMaterial?: string;
    /**
     *
     * @default 'border-primary'
     */
    borderIos?: string;
    /**
     *
     * @default 'border-md-light-outline dark:border-md-dark-outline'
     */
    borderMaterial?: string;
    /**
     *
     * @default 'divide-primary'
     */
    divideIos?: string;
    /**
     *
     * @default 'divide-md-light-outline dark:divide-md-dark-outline'
     */
    divideMaterial?: string;
  };

  /**
   * Makes segmented raised
   *
   * @default false
   */
  raised?: boolean;
  /**
   * Makes segmented outline
   *
   * @default false
   */
  outline?: boolean;
  /**
   * Makes segmented strong
   *
   * @default false
   */
  strong?: boolean;
  /**
   * Makes segmented rounded
   *
   * @default false
   */
  rounded?: boolean;
}
