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
     * @default 'bg-ios-light-surface-1 dark:bg-ios-dark-surface-1'
     */
    strongBgIos?: string;
    /**
     *
     * @default 'bg-md-light-surface-1 dark:bg-md-dark-surface-1'
     */
    strongBgMaterial?: string;
  };

  /**
   * Renders dividers (borders) between list items, overwrites `dividersIos` and `dividersMaterial`
   *
   * @default undefined
   */
  dividers?: boolean;
  /**
   * Renders dividers (borders) between list items in iOS theme
   *
   * @default true
   */
  dividersIos?: boolean;
  /**
   * Renders dividers (borders) between list items in Material theme
   *
   * @default false
   */
  dividersMaterial?: boolean;

  /**
   * Adds extra highlighting. Overwrites `strongIos` and `strongMaterial`
   *
   * @default undefined
   */
  strong?: boolean;
  /**
   * Adds extra highlighting in iOS theme
   *
   * @default false
   */
  strongIos?: boolean;
  /**
   * Adds extra highlighting in Material theme
   *
   * @default false
   */
  strongMaterial?: boolean;
  /**
   * Makes list block inset. Overwrites `insetIos` and `insetMaterial`
   *
   * @default undefined
   */
  inset?: boolean;
  /**
   * Makes list block inset in iOS theme
   *
   * @default false
   */
  insetIos?: boolean;
  /**
   * Makes list block inset in Material theme
   *
   * @default false
   */
  insetMaterial?: boolean;
  /**
   * Renders list outer borders. Overwrites `outlineIos` and `outlineMaterial`
   *
   * @default undefined
   */
  outline?: boolean;
  /**
   * Renders list outer borders in iOS theme
   *
   * @default false
   */
  outlineIos?: boolean;
  /**
   * Renders list outer borders in Material theme
   *
   * @default false
   */
  outlineMaterial?: boolean;

  /**
   * Removes hairlines/dividers and margins, useful for case nesting list block within other blocks
   *
   * @default false
   */
  nested?: boolean;
  /**
   * Renders list as Menu List (same as `<MenuList>`)
   */
  menuList?: boolean;
}
