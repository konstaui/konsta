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
     * @default 'bg-white dark:bg-white/75'
     */
    strongHighlightBgIos?: string;
    /**
     *
     * @default 'bg-white dark:bg-white/15'
     */
    strongHighlightBgMaterial?: string;
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
   * Makes segmented raised in iOS theme
   *
   * @default false
   */
  raisedIos?: boolean;
  /**
   * Makes segmented raised in Material theme
   *
   * @default false
   */
  raisedMaterial?: boolean;
  /**
   * Makes segmented outline
   *
   * @default false
   */
  outline?: boolean;
  /**
   * Makes segmented outline in iOS theme
   *
   * @default false
   */
  outlineIos?: boolean;
  /**
   * Makes segmented outline in Material theme
   *
   * @default false
   */
  outlineMaterial?: boolean;
  /**
   * Makes segmented strong
   *
   * @default false
   */
  strong?: boolean;
  /**
   * Makes segmented strong in iOS theme
   *
   * @default false
   */
  strongIos?: boolean;
  /**
   * Makes segmented strong in Material theme
   *
   * @default false
   */
  strongMaterial?: boolean;
  /**
   * Makes segmented rounded
   *
   * @default false
   */
  rounded?: boolean;
  /**
   * Makes segmented rounded in iOS theme
   *
   * @default false
   */
  roundedIos?: boolean;
  /**
   * Makes segmented rounded in Material theme
   *
   * @default false
   */
  roundedMaterial?: boolean;
}
