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
     * @default 'border-black/20 dark:border-white/15'
     */
    outlineIos?: string;
    /**
     *
     * @default 'border-md-light-outline border-md-dark-outline'
     */
    outlineMaterial?: string;
    /**
     *
     * @default `bg-ios-light-surface-1 dark:bg-ios-dark-surface-1'
     */
    strongBgIos?: string;
    /**
     *
     * @default 'bg-md-light-surface-1 dark:bg-md-dark-surface-1'
     */
    strongBgMaterial?: string;
    /**
     *
     * @default '''
     */
    textIos?: string;
    /**
     *
     * @default 'text-md-light-on-surface dark:text-md-dark-on-surface'
     */
    textMaterial?: string;
  };

  /**
   * Adds extra highlighting and padding block content. Overwrites `strongIos` and `strongMaterial` props
   *
   * @default undefined
   */
  strong?: boolean;
  /**
   * Adds extra highlighting and padding block content in iOS theme
   *
   * @default false
   */
  strongIos?: boolean;
  /**
   * Adds extra highlighting and padding block content in Material theme
   *
   * @default false
   */
  strongMaterial?: boolean;
  /**
   * Makes block inset. Overwrites `insetIos` and `insetMaterial` props
   *
   * @default undefined
   */
  inset?: boolean;
  /**
   * Makes block inset in iOS theme
   *
   * @default false
   */
  insetIos?: boolean;
  /**
   * Makes block inset in Material theme
   *
   * @default false
   */
  insetMaterial?: boolean;
  /**
   * Makes block outline. Overwrites `outlineIos` and `outlineMaterial` props
   *
   * @default undefined
   */
  outline?: boolean;
  /**
   * Makes block outline in iOS theme
   *
   * @default false
   */
  outlineIos?: boolean;
  /**
   * Makes block outline in Material theme
   *
   * @default false
   */
  outlineMaterial?: boolean;
  /**
   * Removes hairlines and margins, useful for case nesting block within other blocks
   *
   * @default false
   */
  nested?: boolean;
}
